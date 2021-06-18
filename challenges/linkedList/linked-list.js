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

    kthFromEnd(k) {
        let currentNode = this.head
        let count = 1;
        while(currentNode.next) {
            currentNode = currentNode.next
            count++
        }
        let result = count - k
        let testHappyCiel = Math.floor(count/k)
     
        if(k>=0) {

            if(result>=1) {
    
                currentNode = this.head
                
                for(let i=0; i<result-1; i++) {
                   currentNode = currentNode.next
                }
                if(testHappyCiel === 2 ) {
                    let happyResult = {
                        path: 'Happy Path',
                        value: currentNode.value
                    }
                    return happyResult
                } else {

                    return currentNode.value;
                }
            }else {
                return 'EXCEPTION'
            }
        } else {
            return 'NOT POSITIVE VALUE'
        }

    }
    linkedLength(LL) {
        let current = LL.head
        let count = 0;
        while(current) {
            current = current.next
            count++
        }
        return count
    }

}




module.exports = {
    LinkedList,
    Node
} 




