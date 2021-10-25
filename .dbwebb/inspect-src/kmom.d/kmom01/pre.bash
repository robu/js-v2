#!/usr/bin/env bash

red=$(tput setaf 1)
green=$(tput setaf 2)
cyan=$(tput setaf 6)
normal=$(tput sgr 0)

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}

cd me || exit 1
header "LINTING CODE"
npm install && npm run linter "kmom01/*.js"

header "RUNNING TESTS"
dbwebb test kmom01

header "OPENING FILES"
atom kmom01
