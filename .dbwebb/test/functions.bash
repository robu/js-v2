#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
NC='\033[0m' # No Color
CORRECT='✓'
ERROR='x'
KMOM="$1"
STUD="$2"
SOLUTIONPATH="../../.solutions/$KMOM"
KMOMPATH="../../me/$KMOM"

function header
{
    clear
    printf "\n\n"
    printf "${ORANGE}### %s ###${NC}\n\n\n" "Test suite for [$1] in the course js for user [$2]"
}

function printYes
{
    printf "${GREEN}%s${NC}" "${CORRECT} Yes"
    printf "\n\n"
}

function printNo
{
    printf "${RED}%s${NC}\n" "${ERROR} No."
    printf "\n\n"
}

function printTest
{
    printf "${ORANGE}%s${NC}\n" "$1. $2"
}

function checkIfFileExist
{
    if [[ -f "$KMOMPATH/$1" ]]; then
        printYes
    else
        printNo
        exit 1
    fi

}

function checkIfContentMatch
{
    file1="$(node $KMOMPATH/$1)"
    file2="$(node $SOLUTIONPATH/$1)"

    result=$(diff <(echo "$file1") <(echo "$file2")) > /dev/null

    if ! [[ "$result" ]]; then
        printYes
    else
        printNo
        printf "%s\n" "-------------------------------------"
        echo -e $result
        printf "%s\n" "-------------------------------------"

        
        exit 1
    fi
}
