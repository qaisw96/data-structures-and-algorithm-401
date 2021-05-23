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


let arr = []
class Queue {
    constructor() {
        this.front = null
    }
    
    
    enqueue(value) {
        const node = new Node(value)
        arr.push(node)
        if(!this.front) {
            this.front = node;
        } else {
            arr[arr.length - 2].next = node
        }
    }

    dequeue() {
        if(this.front) {
            const nodeVal = this.front.value
            this.front = this.front.next
            return nodeVal
        } else {
            return 'QUEUE IS EMPTY'

        }
    }
    
    peek() {
        if(this.front) {
            return this.front
        } else {
            return 'QUEUE IS EMPTY'
        }
    }

    isEmpty() {
        return this.front ? false : true
    }
       
}


module.exports = {
    Stack,
    Queue,
}
