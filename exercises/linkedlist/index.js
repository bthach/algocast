// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // if (this.head) {
        //     var test = this.head;
        //     this.head = new Node(data, test);
        // } else {
        //     this.head = new Node(data)
        // }
    
        this.head = new Node(data, this.head); // refactor above code
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
        return this.head;
    }

    removeFirst() {
        this.head = this.head.next;
        return this.head;
    }

    removeLast() {
        let node = this.head;
        let prev = null;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        return prev.next = null;

    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
console.log(list)

module.exports = { Node, LinkedList };
