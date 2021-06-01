'use strict';

const Node = require('../challenges/fizzBuzzTree/fizz-buzz-tree').Node
const Tree = require('../challenges/fizzBuzzTree/fizz-buzz-tree').Tree
const FizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree').FizzBuzzTree

const root = new Node(10)
root.children[0] = new Node(5)
root.children[1] = new Node(8)
root.children[2] = new Node(9)
root.children[3] = new Node(15)
root.children[3].children[0] = new Node(16)
root.children[3].children[1] = new Node(30)
root.children[3].children[2] = new Node(45)

let tree = new Tree(root)

describe('Fizz-Buzz-Tree Test : ', () => {
    it('1. “Happy Path” - Expected outcome ', () => {
        let result = FizzBuzzTree(tree)
        
        expect(result.root.value).toEqual('Fizz')

        expect(result.root.children[0].value).toEqual('Fizz')
        expect(result.root.children[1].value).toEqual('8')
        expect(result.root.children[2].value).toEqual('Buzz')

        
    })

    it('2. “Expected failure”  ', () => {
        let tree = new Tree()
        let result = FizzBuzzTree(tree)

        expect(result).toEqual('YOUR TREE IS EMPTY')
    })
})

