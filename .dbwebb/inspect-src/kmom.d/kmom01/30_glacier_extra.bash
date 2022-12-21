#!/usr/bin/env bash

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}
cd me || exit 1

if [[ -f "kmom01/glacier_extra.js" ]]; then
    node kmom01/glacier_extra.js

    read -p "Done? "

    exit 0
fi

exit 1
