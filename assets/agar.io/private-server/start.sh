#!/bin/bash
echo ""
echo "  ================================"
echo "    Agar.io Private Server"
echo "  ================================"
echo ""
echo "  Starting server..."
echo ""
if [ -z "$GAME_MEMORY_MB" ]; then
  export GAME_MEMORY_MB=512
fi
echo "  Memory budget: ${GAME_MEMORY_MB} MB"
echo ""
node server.js &
SERVER_PID=$!

cleanup() {
  if kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID" 2>/dev/null
    wait "$SERVER_PID" 2>/dev/null
  fi
}

trap cleanup EXIT INT TERM

echo "  Server PID: ${SERVER_PID}"
echo "  Press any key to stop server..."
STOP_REQUESTED=0
while kill -0 "$SERVER_PID" 2>/dev/null; do
  if read -r -n 1 -s -t 0.2; then
    STOP_REQUESTED=1
    break
  fi
done

echo ""
if [ "$STOP_REQUESTED" -eq 1 ]; then
  cleanup
else
  wait "$SERVER_PID" 2>/dev/null
fi
trap - EXIT INT TERM
if [ "$STOP_REQUESTED" -eq 1 ]; then
  echo "  Server stopped."
else
  echo "  Server exited."
fi
