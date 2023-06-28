/**
* @module hangman
*/

/**
* @name hangman
* @description Base object for hangman
*/
const hangman = {

    /**
    * @type {object}
    * @name partAsElement
    * @description All parts as html elements
    */
    partAsElement: {
        hill: document.getElementById('hang_hill'),
        gallow: document.getElementById('hang_construction'),
        body: document.getElementById('hang_body'),
        rightarm: document.getElementById('hang_rightarm'),
        leftarm: document.getElementById('hang_leftarm'),
        rightleg: document.getElementById('hang_rightleg'),
        leftleg: document.getElementById('hang_leftleg'),
        rope: document.getElementById('hang_rope'),
        head: document.getElementById('hang_head')
    },

    /**
    * @type {Array}
    * @name validParts
    * @description All valid parts as strings
    */
    validParts: [
        "hill",
        "gallow",
        "body",
        "rightarm",
        "leftarm",
        "rightleg",
        "leftleg",
        "rope",
        "head"
    ],

    /**
     * @function isValid
     * @description Check if part a valid part, writes error message to console if the part is invalid.
     * @param {string} part Name of the part to check.
     * @returns boolean true if valid part, else false.
     */
    isValid: function (part) {
        if (this.validParts.indexOf(part) === -1) {
            console.log("The part is not valid: " + part);
            return false;
        }
        console.log("The part is valid: " + part);
        return true;
    },

    /**
     * @function hide
     * @description Hide a part.
     * @param {string} part Name of the part to hide.
     * @returns void.
     */
    hide: function (part) {
        if (this.isValid(part)) {
            console.log("Hiding part: " + part);
            this.partAsElement[part].style.display = "none";
        }
    },

    /**
     * @function show
     * @description Show a part.
     * @param {string} part Name of the part to show.
     * @returns void.
     */
    show: function (part) {
        if (this.isValid(part)) {
            console.log("Showing part: " + part);
            this.partAsElement[part].style.display = "inline";
        }
    }
};

export { hangman };
