'use strict'

const HashTable = require('../challenges/hashTables/hash-tables')

let HT = new HashTable(1024)
HT.set('flow', 'yellow')  
HT.set('wolf', 'gray')  
HT.set('sugar', 'tea')  

describe('Hash HT Testing :):::: ', () => {
    it('1. “Happy Path” - Expected outcome ', () => {
        let expectedOne = HT.contains('flow')
        let expectedTwo = HT.contains('cat')
        console.log(expectedOne);

        let expectedThree = HT.get('sugar')
        
        expect(expectedOne).toBeTruthy()
        expect(expectedTwo).toBeFalsy()
        expect(expectedThree).toEqual('tea')
        
        const hashed = HT.hash('flow')
        let expectedFour = HT.table[hashed].head.next.value
        expect(expectedFour).toEqual({wolf: 'gray'})

    })
    
    it('2. “Expected failure”  ', () => {
        expect('Key Does Not Exist').toEqual(HT.get('something'))
        expect('String only').toEqual(HT.set(369))
    })

})