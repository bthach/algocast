// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    return removeExtra(stringA) === removeExtra(stringB);

}

function removeExtra(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('one one', 'two two');

module.exports = anagrams;



// function anagrams(stringA, stringB) {

//     const charObjA = buildCharMap(stringA);
//     const charObjB = buildCharMap(stringB);

//     var a = Object.getOwnPropertyNames(charObjA);
//     var b = Object.getOwnPropertyNames(charObjB);

//     if (a.length !== b.length) {
//         return false;
//     }

//     for (let property in charObjA) {
//         if (charObjA[property] !== charObjB[property]){
//             debugger;
//             return false;
//         }

//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charObj = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charObj[char] = charObj[char] + 1 || 1;
//     }
//     return charObj;
// }