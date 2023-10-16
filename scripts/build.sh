#!/usr/bin/env bash

# Stop script execution if any command fails
set -e;

# Create the base fallback build
NODE_ENV=production ./node_modules/next/dist/bin/next build;

for DEVICE in desktop mobile; do
    NODE_ENV=production BUILD_DIR="out/_$DEVICE" DEVICE="$DEVICE" ./node_modules/next/dist/bin/next build;
done;

# Make sure cloudflare has access to the _routes.json file
cp _routes.json out/;

