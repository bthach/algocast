// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {
//     debugger;
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed; // adds character to beginning of string
        // reversed = reversed + character; adds character to end of string
        debugger;
    }
    return reversed;
}

reverse('testing');

module.exports = reverse;

// function reverse(str) {
//     // var array = str.split('');
//     // array.reverse();
//     // return array.join('');
//     return str.split('').reverse().join('');
// }




// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed
//     }, '');
// }
