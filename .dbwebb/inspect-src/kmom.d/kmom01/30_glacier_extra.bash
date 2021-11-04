#!/usr/bin/env bash

red=$(tput setaf 1)
green=$(tput setaf 2)
cyan=$(tput setaf 6)
normal=$(tput sgr 0)

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}
cd me || exit 1

if [[ -f "kmom01/glacier_extra.js" ]]; then
    node kmom01/glacier.js

    read -p "Done? "

    exit 0
fi

exit 1
