'use strict'; 

// const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack
// const Stack = require('../stacksAndQueues/stacks-and-queues')

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null
    }

    push(value) {
        if(value) {
            const node = new Node(value)
            const top = this.top
            this.top = node
            node.next = top
        } else {
            return 'ENTER THE VALUE IN ARG'
        }
    }


    pop() {
        if (this.top) {
            const nodeV = this.top.value
            this.top = this.top.next
            return nodeV
        } else {
            return 'STACK IS EMPTY'
        }
    }
    
    peek() {
        if(this.top) {
            return this.top
        } else {
            return 'STACK IS EMPTY'
        }
    }


    isEmpty() {
        return this.top ? false: true
    }
}



// console.log(stack.top.value);
// let arr = [];
class PseudoQueue {
    constructor() {
        this.stack = new Stack()
    }

    enqueue(value) {
        const node = new Node(value)
        // arr.push(node)
        if(value) {
            this.stack.push(value)
        } else {
            return 'ENTER VALUE'
        }
    }

    dequeue() {
        let current =this.stack.top;
        let beforeLast;
        while(current.next){
           beforeLast = current
            current = beforeLast
           current = current.next
        } 

    }
}

// module.exports = PseudoQueue;

const queue = new PseudoQueue()
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(5)
// console.log(queue);
queue.dequeue()
// queue.dequeue()


console.log(queue);
