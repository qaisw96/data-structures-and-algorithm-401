'use strict'; 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
    }

    includes(value) {
        let current = this.head
        let check;
        while (current) {
            if(current.value === value) {
                check = true
                break
            } else {
                check = false
            }
            current = current.next
        }
        return check
    }

    toString() {
        let current = this.head
        let collection = `{ ${current.value} } --> `
        while (current.next) {
            current = current.next
            collection+= `{ ${current.value} } --> `
            if(current.next == null) {
                collection+= `{ ${current.next} }`
            }
        }
        return collection
    }
    
}
module.exports = LinkedList;