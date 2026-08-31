#!/usr/bin/env bash
# Start the LiteLLM proxy in the foreground. Leave this running in its own
# terminal; use ./claude-local in another.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"
# shellcheck source=config.env
source ./config.env

[[ -x .venv/bin/litellm ]] || { echo "Run ./setup.sh first." >&2; exit 1; }

curl -fsS --max-time 5 "${OLLAMA_HOST_URL}/api/tags" >/dev/null 2>&1 || {
  echo "Cannot reach Ollama at ${OLLAMA_HOST_URL}. Start it with: ollama serve" >&2
  exit 1
}

printf '\033[1;34m==>\033[0m Proxy on %s  ->  %s (%s)\n' \
  "$LITELLM_URL" "$OLLAMA_HOST_URL" "$OLLAMA_MAIN_MODEL"

# NO_PROXY matters: if a corporate HTTP(S)_PROXY is set, outbound calls to
# 127.0.0.1 would otherwise be routed through it and fail.
# --host 127.0.0.1 is load-bearing: the proxy has no authentication (see
# litellm.config.yaml), so it must not be reachable from outside this machine.
# LiteLLM binds 0.0.0.0 by default.
exec env NO_PROXY='*' no_proxy='*' \
  ./.venv/bin/litellm --config ./litellm.config.yaml \
    --port "$LITELLM_PORT" --host 127.0.0.1
