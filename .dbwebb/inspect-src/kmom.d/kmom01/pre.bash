#!/usr/bin/env bash

red=$(tput setaf 1)
green=$(tput setaf 2)
cyan=$(tput setaf 6)
normal=$(tput sgr 0)

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}

printf ">>> -------------- dbwebb test kmom01 -------------------------\n"

dbwebb test "kmom01"

echo "Press any key to continue."
read

cd me || exit 1

header "OPENING FILES"
code kmom01
