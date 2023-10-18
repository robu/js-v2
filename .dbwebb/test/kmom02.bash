#!/usr/bin/env bash
# shellcheck disable=SC1091
. "functions.bash"

declare -a files=(
    "animals.js"
    "kmom02.js"
    "jsdoc/index.html"
    "../public/index.html"
    )

# Print the header for the testsuite
header "$1" "$2" "$3"

# Check if the files exists and have correct filename
checkIfFilesExist "${files[@]}"


# cp "kmom02.test.js" "$KMOMPATH/" && npm run test --what=kmom02
# rm "$KMOMPATH/kmom02.test.js"
# if [[ "$4" = "animals" ]]; then 
#     cp "kmom02_main.mjs" "$KMOMPATH/" && node "$KMOMPATH/kmom02_main.mjs"
# fi

exit "$(isSuccess)"
