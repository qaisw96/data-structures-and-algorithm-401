'use strict';

const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');


describe('PSEUDO Test : ', () => {
    it('1. HAPPY PATH ', () => {
        let pseudo = new PseudoQueue()
        pseudo.enqueue(2)
        pseudo.enqueue(4)
        pseudo.enqueue(6)

        pseudo.dequeue()

        expect(pseudo.storage.top.value).toEqual(6)
        expect(pseudo.storage.top.next.value).toEqual(4)
        expect(pseudo.storage.top.next.next).toBeNull()
        expect(pseudo.dequeue()).toBe('HAPPY PATH')
    })


    it('2. Expected failure', () => {
        let pseudo = new PseudoQueue()

        expect(pseudo.dequeue()).toEqual('PSEUDO IS EMPTY')
    })
})