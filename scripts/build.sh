#!/usr/bin/env bash

# Stop script execution if any command fails
set -e;

# Ensure that we don't use next/link in more than one place
node ./scripts/throwOnNextLinkUsage.js;

# Create the base fallback build
DEVICE="responsive" node ./scripts/deviceImports.js
NODE_ENV=production ./node_modules/next/dist/bin/next build;

# Create builds per device
for DEVICE in desktop mobile; do
    DEVICE="$DEVICE" node ./scripts/deviceImports.js
    NODE_ENV=production BUILD_DIR="out/_$DEVICE" DEVICE="$DEVICE" ./node_modules/next/dist/bin/next build;
done;

# Reset imports for local dev
DEVICE="responsive" node ./scripts/deviceImports.js

