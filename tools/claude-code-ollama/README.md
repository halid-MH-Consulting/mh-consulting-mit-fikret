# Claude Code on a local Ollama model

Runs the Claude Code CLI against a model on your own machine instead of the
Anthropic API.

## First, the thing worth being clear about

**You cannot run Claude itself on Ollama.** Ollama serves open-weight models —
Qwen, Llama, Mistral, Gemma, DeepSeek, gpt-oss. Anthropic's models are
closed-weight and reachable only over the API. There is no `ollama pull claude`
and there will not be one.

What this directory does is keep the *client* — the Claude Code CLI, with its
tools, permissions and agent loop — and swap the *model* underneath it for one
running locally. You get the harness, not the model.

Set your expectations accordingly. Claude Code's agent loop leans hard on
long-context reasoning and precise tool calling, and open-weight models you can
run on a laptop are markedly weaker at both. Expect more malformed tool calls,
more lost threads on multi-step work, and much slower responses. It is genuinely
useful for offline work, for cheap high-volume grunt work, and for privacy-bound
code that cannot leave the building. It is not a drop-in substitute for the
hosted model.

## How it fits together

Claude Code speaks the Anthropic Messages API (`POST /v1/messages`). Ollama
speaks its own `/api/chat`. Nothing bridges the two on its own, so a translation
proxy sits in the middle:

```
claude CLI  ──/v1/messages──▶  LiteLLM proxy  ──/api/chat──▶  Ollama  ──▶  model
            (Anthropic fmt)      :4000                        :11434
```

`ANTHROPIC_BASE_URL` is what redirects the CLI at the proxy instead of
`api.anthropic.com`.

## Setup

```bash
# 1. Install Ollama (https://ollama.com/download), then start it
ollama serve

# 2. Pull models, install the proxy, bake in a usable context window
./setup.sh

# 3. Start the proxy — leave this running
./start.sh

# 4. In another terminal
./claude-local
```

Edit `config.env` to change models, ports or context size. Everything else reads
from it.

## Choosing a model

Tool-calling quality matters far more here than raw benchmark scores — a model
that writes beautiful code but mangles its tool calls is useless in an agent
loop. Check <https://ollama.com/library> for current tags; these move.

| Model | Rough RAM (q4) | Notes |
|---|---|---|
| `qwen3-coder:30b` | ~18 GB | Mixture-of-experts, so it runs faster than the size suggests. Good default. |
| `devstral:24b` | ~14 GB | Built specifically for agentic coding harnesses. |
| `qwen2.5-coder:14b` | ~9 GB | Reasonable floor for real work. |
| `qwen2.5-coder:7b` | ~5 GB | Fine as the fast/background model; weak as the main one. |

Add several GB on top of these figures for the KV cache at a 32k context. Below
roughly 16 GB of RAM, expect to be disappointed.

## The context-window trap

This is the failure that wastes an afternoon, so it is worth stating plainly.

Ollama's default context window is small — 4096 tokens on most setups. Claude
Code's system prompt alone is over a thousand tokens before you type anything,
and a single file read can blow the rest. When the conversation exceeds the
window, **Ollama silently drops the overflow.** There is no error and no
warning. The agent simply starts ignoring its instructions a few turns in, and
looks like a stupid model rather than a misconfigured one.

LiteLLM does not fix this for you. Verified against LiteLLM 1.98.0: it forwards
`max_tokens` to Ollama as `options.num_predict`, and sends **no `num_ctx` at
all**. The context window has to be set on the Ollama side.

`setup.sh` handles it by deriving a `-cc` model with `PARAMETER num_ctx` baked
into a Modelfile, because a Modelfile parameter takes precedence over the
`OLLAMA_CONTEXT_LENGTH` environment variable. `ollama create` with a `FROM` just
writes a new manifest over the same weight blobs, so it costs no real disk.

### The output allocation eats the same budget

Ollama's `num_ctx` is a **single budget shared by prompt and completion**, not a
prompt-only limit. Claude Code asks for 32000 output tokens by default, which on
a 32768-token window leaves roughly 768 tokens for the actual conversation.
Verified: that request arrives at Ollama as `options.num_predict: 32000`.

`claude-local` sets `CLAUDE_CODE_MAX_OUTPUT_TOKENS` (default 8192, from
`MAX_OUTPUT_TOKENS` in `config.env`) to keep the completion allocation well
under the window. If you raise `NUM_CTX_MAIN`, consider raising this too.

### The client thinks it has 200k

There is a third part to this trap, on the client side. Claude Code does not
recognise the model name `local-main`, and for an unknown model it assumes a
**200k** context window — it will say so on startup. Left alone it would let the
conversation grow to 200k before auto-compacting, while Ollama quietly discards
everything past 32k. The two failure modes compound, and the symptom is the same
silent amnesia. `claude-local` sets `CLAUDE_CODE_MAX_CONTEXT_TOKENS` to match
`NUM_CTX_MAIN` so compaction fires while the conversation still fits. If you
raise `NUM_CTX_MAIN`, that follows automatically.

## Verifying it works

With the proxy running:

```bash
curl -s http://127.0.0.1:4000/v1/messages \
  -H "Authorization: Bearer sk-local-ollama" \
  -H "Content-Type: application/json" \
  -d '{"model":"local-main","max_tokens":64,
       "messages":[{"role":"user","content":"say pong"}]}'
```

The bearer token is arbitrary — the proxy does not check it (see Gotchas).

A well-formed Anthropic response (`"type":"message"`, a `content` array) means
the translation layer is healthy and anything still broken is Claude Code's
config, not the proxy.

To confirm the context window actually took:

```bash
ollama show qwen3-coder-30b-cc | grep -i context
```

## Gotchas

- **`ollama_chat/`, not `ollama/`.** The `ollama_chat/` prefix routes to
  `/api/chat`, which applies the chat template and handles tool calling.
- **`os.environ/NAME`, not `${NAME}`.** LiteLLM's config does not do shell-style
  interpolation. `${NAME}` is passed through literally and produces a mangled
  URL. Because the whole value is substituted, the env var must carry the full
  prefixed string (`ollama_chat/model:tag`), not just the model name.
- **`ANTHROPIC_BASE_URL` is read once at startup.** Changing it inside a running
  session does nothing, silently. Restart the CLI.
- **A corporate `HTTP_PROXY` will break localhost calls.** `start.sh` sets
  `NO_PROXY='*'` to stop 127.0.0.1 traffic being routed through it.
- **First request after a cold start is slow** — Ollama loads the weights on
  demand. `claude-local` raises `API_TIMEOUT_MS` to 10 minutes to cover it.
- **`400 No connected db` means an auth mismatch**, not a database problem.
  LiteLLM prefers the `Authorization: Bearer` header over `x-api-key`; if that
  bearer is not the configured master key it tries to resolve it as a virtual
  key in a database that does not exist. A Claude Code install logged in via
  OAuth sends its own rotating `sk-ant-oat-...` bearer that overrides
  `ANTHROPIC_AUTH_TOKEN`, so no fixed master key can match. This config sets no
  master key at all and binds the proxy to loopback instead.

## What is not covered

Claude Code features that depend on Anthropic-side infrastructure — prompt
caching economics, web search, and the hosted-only tools — do not work against a
local backend. Extended thinking depends on whether the local model supports it
at all.
