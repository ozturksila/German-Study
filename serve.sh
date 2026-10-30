#!/bin/zsh
# Serve the course locally, with the writing judge enabled when a key is present.
# Keep the port the same so your saved progress (stored per address) stays available.
cd "$(dirname "$0")"
exec python3 server.py 8010
