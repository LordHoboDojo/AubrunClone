#!/bin/bash
echo "Building project..."
./build.sh
echo "Starting webserver..."
node ./backend/build/index.js
