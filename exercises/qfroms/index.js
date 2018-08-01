// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    remove () {
        while (stackA.peek()) {
            stackB.push(stackA.remove())
        }

        rm = stackB.pop();

        while (stackB.peek()) {
            stackA.push(stackB(pop));
        }

        return rm;
    }

    add (item) {
        stackA.push(item);
    }

    peek () {
        while (stackA.peek()) {
            stackB.push(stackA.remove())
        }

        return stackB[stackB.length-1];
    }
}

module.exports = Queue;

// stack... LIFO. 

// two stacks LIFO LIFO

// queue... FIFO.