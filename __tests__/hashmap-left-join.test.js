'use strict';

const hashMapLeftJoin = require('../challenges/hashMapLift/hashmap-left-join');
const HashTable = require('../challenges/hashTables/hash-tables');

let HT1 = new HashTable(30)
HT1.set('flow', 'yellow')  
HT1.set('wolf', 'gray')  
HT1.set('sugar', 'tea')  

let HT2 = new HashTable(30)
HT2.set('flow', 'red')  
HT2.set('wolf', 'black')  
HT2.set('salt', 'tea')  

console.log(HT1)
describe('Hash HT Testing :):::: ', () => {
    it('1. “Happy Path” - Expected outcome ', () => {
        const expected = hashMapLeftJoin(HT1, HT2)
        console.log(expected);

    })
    
    it('2. “Expected failure”  ', () => {
        // expect('Key Does Not Exist').toEqual(HT.get('something'))
        // expect('String only').toEqual(HT.set(369))
    })

})