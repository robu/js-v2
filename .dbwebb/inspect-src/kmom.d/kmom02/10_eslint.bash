#!/usr/bin/env bash

red=$(tput setaf 1)
green=$(tput setaf 2)
cyan=$(tput setaf 6)
normal=$(tput sgr 0)

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}
#
# header "LINTING CODE"

# cp example/environment/.eslintrc.json . || exit 1
# cp example/environment/package.json . || exit 1
# cd me || exit 1

# ls -al

# npm install
npm run linter "me/kmom02/" --silent || exit 1

read -p "Done? "

exit 0
