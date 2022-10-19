#!/usr/bin/env bash

red=$(tput setaf 1)
green=$(tput setaf 2)
cyan=$(tput setaf 6)
normal=$(tput sgr 0)

function header {
    printf "\033[32;01m>>> -------------- %-20s -------------------------\033[0m\n" "$1"
}

# cd .dbwebb/test || exit 1


# npm run test --silent --kmom=kmom02 || exit 1
read -p "We are now going to check animals assignment. Press something to continue. "

#
cd me/kmom02 || exit 1
cp ../../.solutions/kmom02/main.mjs .
#
# touch "dbwebb.mjs"
#
# echo -e "import * as african from './african.mjs'\n
# import * as european from './european.mjs'\n
# import * as american from './american.mjs'\n
#
# const europeanAnimals = european.allAnimals()\n
# console.log('Hi')\n
# console.log(europeanAnimals)" > dbwebb.mjs
#
node main.mjs

read -p "Done? "
