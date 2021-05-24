'use strict'; 

// const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack
// // const Stack = require('../stacksAndQueues/stacks-and-queues')

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



class PseudoQueue {
    constructor() {
        this.storage = new Stack()
    }

    enqueue(value) {
        if(value) {
            this.storage.push(value)
        } else {
            return 'ENTER VALUE'
        }
    }

    dequeue() {
        if(!(this.storage.top === null)) {
            let currentNode = this.storage.top
            let node = new Stack()
            while(currentNode){
                    node.push(currentNode.value)
                    
                    currentNode=currentNode.next;
                }
            node.pop()
            this.storage = new Stack()
            let current = node.top
            while(current) {
                this.storage.push(current.value)
                current = current.next
            }
            return 'HAPPY PATH'
        } else {
            return 'PSEUDO IS EMPTY'
        }
    }
}



module.exports = PseudoQueue;
