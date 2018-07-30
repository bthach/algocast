// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (i = 1; i <=n; i++) {
        let spaces = ' '.repeat(n-i);
        let pound = '#'.repeat(i + i - 1);

        console.log(spaces + pound + spaces);
    }
}

pyramid(2);

module.exports = pyramid;
