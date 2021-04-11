#!/bin/bash
echo "Building project..."
echo "Building frontend..."
cd ./frontend/
npm install
npm install axios
npm run build
cd ..
echo "Building backend..."
cd ./backend/
npm install
npm install express
npm install axios
npm run build
cd ..
echo "Build complete..."
