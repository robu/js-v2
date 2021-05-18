#!/usr/bin/env bash

KMOM="$1"

[[ -d "node_modules" ]] && npx jest "suite.d/$KMOM" && exit 0

echo "You need to run 'npm install'"
