#!/usr/bin/env bash

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}



if [[ ! -f "package.json" ]] || [[ ! -f ".eslintrc.json" ]]; then
    read -p "Missing files. Should I fix it? [Y/n]" answer
    if [[ "$answer" != "n" ]]; then
        cp example/environment/.eslintrc.json .
        cp example/environment/package.json .
        npm install
    else
        exit 1
    fi
fi

if [[ ! -d "node_modules" ]]; then
    read -p "Missing folder npm_modules. Should I fix it? [Y/n]" answer
    if [[ "$answer" != "n" ]]; then
        npm install
    else
        exit 1
    fi
fi

npm run linter "me/kmom06/" --silent || exit 1

read -p "All good. Done? "

exit 0
