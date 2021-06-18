'use strict';

const LinkedList = require('../challenges/linkedList/linked-list').LinkedList
const zipLists = require('../challenges/llZip/ll-zip')

describe('1. LL ZIP test', () => {
    it('When the LL1 == LL2', () => {
        const LL1 = new LinkedList()
        const LL2 = new LinkedList()
        LL1.insert(1)
        LL1.insert(3)
        LL1.insert(5)

        LL2.insert(2)
        LL2.insert(4)
        LL2.insert(6)

        let zipList = zipLists(LL1, LL2)

        expect(zipList.toString()).toEqual('{ 1 } --> { 2 } --> { 3 } --> { 4 } --> { 5 } --> { 6 } --> { null }');
        expect(zipList.head.value).toEqual(1)
        expect(zipList.head.next.value).toEqual(2)
        expect(zipList.head.next.next.value).toEqual(3)
        expect(zipList.head.next.next.next.value).toEqual(4)


    })
    it('2. When the LL1 > LL2', () => {
        const LL1 = new LinkedList()
        const LL2 = new LinkedList()
        LL1.insert(1)
        LL1.insert(3)
        LL1.insert(5)
        LL1.insert(7)
        LL1.insert(9)

        LL2.insert(2)
        LL2.insert(4)
        LL2.insert(6)

        let zipList = zipLists(LL1, LL2)

        expect(zipList.toString()).toEqual('{ 1 } --> { 2 } --> { 3 } --> { 4 } --> { 5 } --> { 6 } --> { 7 } --> { 9 } --> { null }');
        expect(zipList.head.value).toEqual(1)
        expect(zipList.head.next.value).toEqual(2)
        expect(zipList.head.next.next.value).toEqual(3)
        expect(zipList.head.next.next.next.value).toEqual(4)

    })
    it('3. When the LL1 < LL2', () => {
        const LL1 = new LinkedList()
        const LL2 = new LinkedList()
        LL1.insert(1)
        LL1.insert(3)
        LL1.insert(5)

        LL2.insert(2)
        LL2.insert(4)
        LL2.insert(6)
        LL2.insert(8)
        LL2.insert(10)


        let zipList = zipLists(LL1, LL2)

        expect(zipList.toString()).toEqual('{ 1 } --> { 2 } --> { 3 } --> { 4 } --> { 5 } --> { 6 } --> { 8 } --> { 10 } --> { null }');
        expect(zipList.head.value).toEqual(1)
        expect(zipList.head.next.value).toEqual(2)
        expect(zipList.head.next.next.value).toEqual(3)
        expect(zipList.head.next.next.next.value).toEqual(4)

    })
})