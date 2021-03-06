'use strict'; 

const LinkedList =require('../challenges/linkedList/linked-list').LinkedList
// create new Linked list to test
let ll = new LinkedList() 
// create values to test 
let firstValue = 'my first value'
let secondValue = 'my second value'
let thirdValue = 'my third value'
let fourthValue = 'my 4th value'

describe('Linked List Test : ', () => {
    it('1. Can successfully instantiate an empty linked list', () =>{
        expect(ll.head).toBeNull()
    })

    it('2. Can properly insert into the linked list', () => {
        ll.insert(firstValue)

        expect(ll.head.value).toEqual(firstValue) 
        expect(ll.head.next).toBeNull()
    })
    
    it('3. The head property will properly point to the first node in the linked list', () => {
        expect(ll.head.value).toEqual(firstValue) 
    })

    it('4. Can properly insert multiple nodes into the linked list', () => {
        ll.insert(secondValue)
        ll.insert(thirdValue)
        ll.insert(fourthValue)

        expect(ll.head.next.value).toEqual('my second value')
        expect(ll.head.next.next.value).toEqual('my third value')
        expect(ll.head.next.next.next.value).toEqual('my 4th value')
    })

    it('5. Will return true when finding a value within the linked list that exists', () => {
        let check = ll.includes('my third value');
        expect(check).toEqual(true)
    })
    
    it('6. Will return false when searching for a value in the linked list that does not exist', () => {
        let check = ll.includes('my 9th value');
        expect(check).toEqual(false)
    })

    it('7. Can properly return a collection of all the values that exist in the linked list', () => {
        let collectionOfValues = ll.toString()

        expect(collectionOfValues).toEqual(`{ ${firstValue} } --> { ${secondValue} } --> { ${thirdValue} } --> { ${fourthValue} } --> { null }`)
    })
})


// test for code challenge 06

describe(' Linked List ====> CODE CHALLENGE 06', () => {
    it('1. Can successfully add a node to the end of the linked list', () => {
        const testValue = 'add to end'
        ll.insert(testValue)

        let current = ll.head
        while(current.next) {
            current = current.next
        }

        expect(current.value).toEqual(testValue)
    })

    it('2. Can successfully insert a node before a node located i the middle of a linked list', () => {
        let newLl = new LinkedList()
        newLl.insert(1)
        newLl.insert(2)
        newLl.insert(3)
        newLl.insert(4)
        console.log(newLl.toString());
        
        let count = 1;
        let current = newLl.head
        while(current.next) {
            current = current.next;
            count++
        }
        const middle = count/2
        
        const testValue = 10
        newLl.insertBefore(middle, testValue)
        
        expect(newLl.toString()).toEqual(`{ 1 } --> { 10 } --> { 2 } --> { 3 } --> { 4 } --> { null }`)


        

    })

    it('3. Can successfully insert a node before the first node of a linked list', () => {
        let testVal = 'before the first node';
        let newLl = new LinkedList()
        newLl.insert(2)
        newLl.insert(4)
        newLl.insert(5)

        newLl.insertBefore(2, testVal)

        expect(newLl.head.value).toEqual(testVal)
        
    })

    it('4. Can successfully insert after a node in the middle of the linked list', () => {

        let newLl = new LinkedList()
        newLl.insert(1)
        newLl.insert(2)
        newLl.insert(3)
        newLl.insert(4)

        let count = 1;
        let current = newLl.head
        while(current.next) {
            current = current.next;
            count++
        }
        const middle = count/2

        const testValue = 10
        newLl.insertAfter(middle, testValue)

        expect(newLl.toString()).toEqual(`{ 1 } --> { 2 } --> { 10 } --> { 3 } --> { 4 } --> { null }`)

    })

    it('5. Can successfully insert a node after the last node of the linked list', () => {

        let newVal = 8;
        let newLl = new LinkedList()
        newLl.insert(2)
        newLl.insert(4)
        newLl.insert(5)

        newLl.insert(newVal)
        let current = newLl.head
        while(current.next) {
            current = current.next;
        }
        expect(current.value).toEqual(newVal)
    })

})


// // test for code challenge 06
let newLl = new LinkedList()
newLl.insert(2)
newLl.insert(4)
newLl.insert(6)
newLl.insert(8)
newLl.insert(10)
newLl.insert(12)
newLl.insert(14)
newLl.insert(16)
newLl.insert(18)
newLl.insert(20)

describe('Linked List ====> CODE CHALLENGE 07', () => {
    it('Where k is greater than the length of the linked list', () => {

        expect(newLl.kthFromEnd(22)).toEqual('EXCEPTION')
    })

    it('Where k and the length of the list are the same', () => {
        let newList = new LinkedList()
        newList.insert(1)
        newList.insert(2)
        newList.insert(3)
        newList.insert(4)
        newList.insert(5)
        console.log(newList.toString());
        expect(newList.kthFromEnd(5)).toEqual('EXCEPTION')
    })

    it('Where k is not a positive integer', () => {
        expect(newLl.kthFromEnd(-5)).toEqual('NOT POSITIVE VALUE')
    })

    it('Where the linked list is of a size 1', () => {
        let newLL = new LinkedList()
        newLL.insert(4)
        
        expect(newLL.kthFromEnd(2)).toEqual('EXCEPTION')
    })

    it('Happy Path ????!!!!', () => {
        // i have 10 nodes in  newLl, so if the k=4 || k=5 ===> should i be in happy path

        let result =  newLl.kthFromEnd(4)
        console.log(result);
        expect(result.path).toEqual('Happy Path')
    })
})