#!/bin/bash

set -e

if [ -z "$TEST_COMMAND" ]; then
    echo "ERROR: You must set the TEST_COMMAND environment variable."
    echo "Example usage: TEST_COMMAND='test:parallel' ./runTests.sh"
    exit 1
fi

PROJECT_DIR="/toTest"

COPY_PROJECT_DIR="/cpToTest"

cp -r -v -a "$PROJECT_DIR"/* "$COPY_PROJECT_DIR"

cp -r -v -a "$PROJECT_DIR"/.* "$COPY_PROJECT_DIR"

cd "$COPY_PROJECT_DIR"

if [ "$NPM_INSTALL" = "true" ] || [ "$NPM_INSTALL" = "1" ]; then
    echo "Installing dependencies..."
    npm install
fi

if [ "$NPM_BUILD" = "true" ] || [ "$NPM_BUILD" = "1" ]; then
    echo "Building app..."
    npm install
fi

echo "Running tests with '$TEST_COMMAND'..."
eval "npm run $TEST_COMMAND"
