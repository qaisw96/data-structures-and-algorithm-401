'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null
        this.storage = [];
    }

    push(value) {
       const newNode = new Node(value)
       if(!newNode.next) {
           this.storage.unshift(newNode);
           this.top = newNode
       }
    }

    pop() {
        if(!this.top) {
            return 'EXCEPTION'
        } else {
            const removedItem = this.storage.shift()
            this.top = this.storage[0] || null
            return removedItem.value
        }
    }

    peek() {
        if(!this.top) {
            return 'EXCEPTION'
        } else {
            return this.top;
        }
    }

    isEmpty() {
        if(!this.top) {
            return true
        } else {
            return false
        }
    }

    
}

class Queue {
    constructor() {
        this.front = null
        this.storage = []
        
    }

    enqueue(value) {
        const newNode = new Node(value)
        if(this.storage.length == 0) {
            this.front = newNode
        }
        this.storage.push(newNode)
    }

    dequeue() {
        if(this.storage ==0) {
            return 'EXCEPTION'
        } else {
            const removedItem = this.storage.shift()
            this.front = this.storage[0] || null
            return removedItem.value
        }
    }

    peek() {
        if(!this.front) {
            return 'EXCEPTION'
        } else {
            return this.front
        }
    }

    isEmpty() {
        if(this.storage == 0 ) {
            return true
        } else {
            return false
        }
    }
}

// const stk = new Stack()
// console.log(stk.push());

module.exports = {
    Stack,
    Queue,
}
