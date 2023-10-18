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
if [[ -f "if-numbers.js" ]]; then

    testKmom01If "2" "2 är lägre än 10." "2 är ett jämt tal."
    testKmom01If "13" "13 är mellan 10 och 20." "13 är ett udda tal."
    testKmom01If "100" "100 är högre än eller lika med 100." "100 är ett jämt tal."
    testKmom01If "42" "42 är ett jämt tal." "Meaning of life."
else
    printf "\n${RED}%s${NC}\n" "Unable to test if-numbers.js"
fi

if [[ -f "forloop.js" ]]; then
    testKmom01For "5" "10" "5 6 7 8 9 10"
    testKmom01For "10" "5" "10 9 8 7 6 5"
    testKmom01For "11" "11" "11 9 7 5 3 1"
else
    printf "\n${RED}%s${NC}\n" "Unable to test forloop.js"
fi


# cd "../../me"

# echo "Running [npm run eslint --kmom=$1]"
# res=$(npm run --silent eslint --kmom=$1)

# [[ ! -z "$res" ]] && printf "Eslint validates: ${RED}${ERROR}${NC} $res" || printf "Eslint validates: ${GREEN}${CORRECT}${NC}"

# echo "Running [npm run htmlhint]"
# npm run --silent htmlhint

# echo "Running [npm run stylelint --kmom=$1]"
# npm run --silent stylelint --kmom=$1

exit "$(isSuccess)"
