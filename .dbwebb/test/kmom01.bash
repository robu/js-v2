#!/usr/bin/env bash
# shellcheck disable=SC1091
. "functions.bash"

declare -a files=(
    "glacier.js"
    "../redovisa/index.html"
    )

# Print the header for the testsuite
header "$1" "$2" "$3"

# CHeck if the files exists and have correct filename
checkIfFilesExist "${files[@]}"
cd "../../me"
validation "kmom01" "eslint"
validation "kmom01" "htmlhint"
validation "kmom03" "stylelint"
# cd "../../me"

# echo "Running [npm run eslint --kmom=$1]"
# res=$(npm run --silent eslint --kmom=$1)

# [[ ! -z "$res" ]] && printf "Eslint validates: ${RED}${ERROR}${NC} $res" || printf "Eslint validates: ${GREEN}${CORRECT}${NC}"

# echo "Running [npm run htmlhint]"
# npm run --silent htmlhint

# echo "Running [npm run stylelint --kmom=$1]"
# npm run --silent stylelint --kmom=$1

exit "$(isSuccess)"
