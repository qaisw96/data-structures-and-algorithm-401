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

    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let current = this.head;
        while(current.next) {
            if(current.value === value) {
                current.next = {
                    value: node.value,
                    next: current.next
                }
                break;
            }
            current = current.next
        }
    }

    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) {
                const currentVal = currentNode.value

                currentNode.value = node.value
                currentNode.next = {
                    value: currentVal,
                    next: currentNode.next
                }
                break;
            }
            currentNode = currentNode.next
        }
    }


   
}
module.exports = LinkedList;

let newNode = new LinkedList()
newNode.insert(2)
newNode.insert(4)
newNode.insertBefore(2, 5)
// newNode.insert(6)
console.log(newNode.toString());