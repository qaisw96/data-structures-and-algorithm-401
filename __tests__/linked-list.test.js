'use strict'; 

const LinkedList =require('../challenges/linkedList/linked-list')
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