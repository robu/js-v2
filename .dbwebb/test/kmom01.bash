#!/usr/bin/env bash
# shellcheck disable=SC1091

. "functions.bash"

declare -a files=(
    "if-numbers.js"
    "forloop.js"
    "../public/js/main.js"
    "../public/index.html"
    )

# Print the header for the testsuite
header "$1" "$2" "$3"

# CHeck if the files exists and have correct filename
checkIfFilesExist "${files[@]}"
cd "../../me"

validation "public" "eslint"
validation "public" "htmlhint"
validation "public" "stylelint"


cd kmom01/

printf "\n${ORANGE}%s${NC}\n" "Testing if-numbers.js"
echo "Should print '2 är lägre än 10' and '2 är ett jämt tal.':"
node "if-numbers.js" 2

printf "\n${ORANGE}%s${NC}\n" "Testing forloop.js"
echo "Should print 5-10:"
node "forloop.js" 5 10

echo "Should print 10-5:"
node "forloop.js" 10 5

echo "Should print every other value rom 11 to 1:"
node "forloop.js" 11 11


# cd "../../me"

# echo "Running [npm run eslint --kmom=$1]"
# res=$(npm run --silent eslint --kmom=$1)

# [[ ! -z "$res" ]] && printf "Eslint validates: ${RED}${ERROR}${NC} $res" || printf "Eslint validates: ${GREEN}${CORRECT}${NC}"

# echo "Running [npm run htmlhint]"
# npm run --silent htmlhint

# echo "Running [npm run stylelint --kmom=$1]"
# npm run --silent stylelint --kmom=$1

exit "$(isSuccess)"
