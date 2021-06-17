'use strict';

const QuickSort = require('../challenges/quickSort/quick-sort')


let one = [2, 15, 8, 9, 0, 20]
let two = [5, 8, 2, 33, 12, 100, 52]

describe('Quick Sort Testing :: ', () => {
    it('1. “Happy Path” - Expected outcome ', () => {
        let expectedOne = [0, 2, 8, 9, 15, 20]
        let expectedTwo = [2, 5, 8, 12, 33, 52, 100]

        expect(expectedOne).toEqual(QuickSort(one))
        expect(expectedTwo).toEqual(QuickSort(two))
        
    })
    
    it('2. “Expected failure”  ', () => {
        expect([1]).toEqual(QuickSort([1]))

    })

})