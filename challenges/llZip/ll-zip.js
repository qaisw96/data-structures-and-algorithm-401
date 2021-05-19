'use strict' 

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

    linkedListLength(LL) {
        let current = LL.head
        let count = 0;
        while(current) {
            current = current.next
            count++
        }
        return count
    }


}



function zipLists(newNode1, newNode2) {
    
    let currentNode1 = newNode1.head
    let currentNode2 = newNode2.head

    let newLL = new LinkedList()
    let LL1Length = newLL.linkedListLength(newNode1)
    let LL2Length = newLL.linkedListLength(newNode2)

    let checkMore;
    let checkLess;

    if(LL1Length>LL2Length) {
        checkMore = currentNode2
        checkLess = currentNode1
        
    } else {
        checkMore = currentNode1
        checkLess = currentNode2
    }

    while(checkMore) {
        
        if(checkLess) {
            newLL.insert(checkLess.value)
            checkLess = checkLess.next
        }

        newLL.insert(checkMore.value)
        checkMore = checkMore.next
    }

 
    console.log(newLL.toString());

}
