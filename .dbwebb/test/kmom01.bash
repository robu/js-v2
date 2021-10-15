#!/usr/bin/env bash
. "functions.bash"

# Print the header for the testsuite
header "$KMOM" "$STUD"
printTest "1" "Is the file me/kmom01/glacier.js present and with correct filename?"
checkIfFileExist "glacier.js"

printTest "2" "Is the output correct?"
checkIfContentMatch "glacier.js"
