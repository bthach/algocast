// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charsObj = {}; // check why const vs var
    let max = 0;
    maxChar = '';

    for (let char of str) { // let char of iterates through arrays or strings
        // debugger;
        // console.log(char);
        charsObj[char] = charsObj[char] + 1 || 1;
        debugger;
    }
    console.log(charsObj);

    for (let char in charsObj) { // char in iterates through object, assigned keys
        if (charsObj[char] > max) {
            max = charsObj[char];
            maxChar = char;
        }
        
}
    return maxChar;
};

module.exports = maxChar;
