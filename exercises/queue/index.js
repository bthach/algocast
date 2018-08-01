// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// [1, 2, 3, 4]

// add, push.

// remove, shift

class Queue {
    constructor() {
        this.data = [];
    }

    add(num) {
        this.data.push(num);
    };

    remove() {
        return this.data.shift();
    }
}

var q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q);
var x = q.remove();
console.log(x);

module.exports = Queue;

// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     add(num) {
//         this.data.unshift(num);
//     };

//     remove() {
//         return this.data.pop();
//     }
// }