#!/usr/bin/env bash
# One-time setup: install the LiteLLM proxy, pull the models, and bake a usable
# context window into them. Safe to re-run.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"
# shellcheck source=config.env
source ./config.env

say() { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
die() { printf '\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }

# --- Prerequisites ----------------------------------------------------------
command -v ollama >/dev/null 2>&1 || die \
  "ollama not found. Install it from https://ollama.com/download, then re-run."
command -v python3 >/dev/null 2>&1 || die "python3 not found."
command -v claude   >/dev/null 2>&1 || printf \
  '\033[1;33mWarning:\033[0m claude CLI not found. Install with: npm i -g @anthropic-ai/claude-code\n'

curl -fsS --max-time 5 "${OLLAMA_HOST_URL}/api/tags" >/dev/null 2>&1 || die \
  "Cannot reach Ollama at ${OLLAMA_HOST_URL}. Start it with: ollama serve"

# --- LiteLLM proxy ----------------------------------------------------------
if [[ ! -x .venv/bin/litellm ]]; then
  say "Creating virtualenv and installing LiteLLM (this takes a minute)"
  python3 -m venv .venv
  ./.venv/bin/pip install --quiet --upgrade pip
  ./.venv/bin/pip install --quiet 'litellm[proxy]'
else
  say "LiteLLM already installed ($(./.venv/bin/litellm --version 2>&1 | tail -1))"
fi

# --- Models -----------------------------------------------------------------
# Ollama's default context window is small (4096 tokens on most setups). Claude
# Code's system prompt plus a couple of tool results blows straight past that,
# and Ollama silently DROPS the overflow -- no error, the agent just starts
# ignoring its instructions partway through. LiteLLM does not send num_ctx, so
# it has to be fixed here. A Modelfile PARAMETER takes precedence over the
# OLLAMA_CONTEXT_LENGTH env var, so bake it into a derived model. `ollama create`
# with a FROM just writes a new manifest over the same blobs -- it costs no
# meaningful disk.
bake_ctx() {
  local base="$1" derived="$2" ctx="$3"
  say "Pulling ${base}"
  ollama pull "$base"
  say "Baking num_ctx=${ctx} into ${derived}"
  printf 'FROM %s\nPARAMETER num_ctx %s\n' "$base" "$ctx" \
    | ollama create "$derived" -f /dev/stdin
}

bake_ctx "$OLLAMA_MAIN_BASE" "$OLLAMA_MAIN_MODEL" "$NUM_CTX_MAIN"
bake_ctx "$OLLAMA_FAST_BASE" "$OLLAMA_FAST_MODEL" "$NUM_CTX_FAST"

say "Setup complete."
echo
echo "  Start the proxy:  ./start.sh"
echo "  Then, elsewhere:  ./claude-local"
