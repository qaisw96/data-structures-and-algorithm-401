'use strict';

const Stack = require('../challenges/stacksAndQueues/stacks-and-queues').Stack
const Queue = require('../challenges/stacksAndQueues/stacks-and-queues').Queue


describe('STACK Test : ', () => {
    it('1. Can successfully push onto a stack', () => {
        const stack = new Stack()
        stack.push(2)

        expect(stack instanceof Stack).toBeTruthy()
        expect(stack.top.value).toEqual(2)
    })
    it('2. Can successfully push multiple values onto a stack', () => {
        const stack = new Stack()
        stack.push(2)
        stack.push(4)
        stack.push(6)
                
        let test = 6
        while(stack.top) {
            expect(stack.top.value).toEqual(test)
            test-=2  

            stack.top = stack.top.next
        }
    })
    
    it('3. Can successfully pop off the stack', () => {
        const stack = new Stack()
        stack.push(2)
        stack.push(4)

        let item = stack.pop()
        expect(item).toEqual(4)
        expect(stack.peek().value).toEqual(2)
    })

    it('4. Can successfully empty a stack after multiple pops', () => {
        const stack = new Stack()
        stack.push(2)
        stack.push(4)
        stack.push(6)

        stack.pop()
        stack.pop()
        stack.pop()

        expect(stack.isEmpty()).toBeTruthy()
    })
    
    it('5. Can successfully peek the next item on the stack', () => {
        const stack = new Stack()
        stack.push(2)
        stack.push(4)

        expect(stack.peek().value).toBe(4)
    })

    it('6. Can successfully instantiate an empty stack', () => {
        const stack = new Stack()

        expect(stack instanceof Stack).toBeTruthy()
        expect(stack.isEmpty()).toBeTruthy()
    })
    
    it('7. Calling pop or peek on empty stack raises exception', () => {
        const stack = new Stack()

        expect(stack.pop()).toBe('STACK IS EMPTY')
        expect(stack.peek()).toBe('STACK IS EMPTY')
    })
})


describe('QUEUES Test : ', () => {
    
    it('8. Calling pop or peek on empty stack raises exception', () => {
        const queue = new Queue()
        queue.enqueue(2)

        expect(queue instanceof Queue).toBeTruthy()
        expect(queue.front.value).toEqual(2)
    })

    it('9. Can successfully enqueue multiple values into a queue', () => {
        const queue = new Queue()
        queue.enqueue(2)
        queue.enqueue(4)
        queue.enqueue(6)
                
        let test = 2
        while(queue.top) {
            expect(queue.top.next.value).toEqual(test)
            test+=2  

            queue.top = queue.top.next
        }
    })

    it('10. Can successfully dequeue out of a queue the expected value', () => {
        const queue = new Queue()
        queue.enqueue(2)
        queue.enqueue(4)
        
        let item = queue.dequeue()
        expect(item).toEqual(2)
        expect(queue.peek().value).toEqual(4)
    })
    
    it('11. Can successfully peek into a queue, seeing the expected value', () => {
        const queue = new Queue()
        queue.enqueue(2)
        queue.enqueue(4)

        expect(queue.peek().value).toBe(2)
    })

    it('12. Can successfully empty a queue after multiple dequeues', () => {
        const queue = new Queue()
        queue.enqueue(2)
        queue.enqueue(4)
        queue.enqueue(6)

        queue.dequeue()
        queue.dequeue()
        queue.dequeue()

        expect(queue.isEmpty()).toBeTruthy()
    })

    it('13. Can successfully instantiate an empty queue', () => {
        const queue = new Queue()

        expect(queue instanceof Queue).toBeTruthy()
        expect(queue.isEmpty()).toBeTruthy()
    })

    it('14. Calling dequeue or peek on empty queue raises exception', () => {
        const queue = new Queue()

        expect(queue.peek()).toBe("QUEUE IS EMPTY")
        expect(queue.dequeue()).toBe("QUEUE IS EMPTY")
    })
})