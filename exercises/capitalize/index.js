// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

capitalize('HELLO BITCH');
module.exports = capitalize;



// arr = str.toLowerCase().split(' ');
// console.log(arr);
// arr2 = []

// for (let word of arr) {

//     arr2.push(word[0].toUpperCase() + word.slice(1));

    

//     // let first = word[0].toUpperCase();
//     // second = word.slice(1);
//     // var replace = first + second;
//     // arr2.push(replace);
// }

// console.log(arr2);
// return arr2.join(' ');