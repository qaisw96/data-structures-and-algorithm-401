'use strict';

const Node = require('../challenges/tree/node')
const BinarySearchTree = require('../challenges/tree/tree').BinarySearchTree
const BinaryTree = require('../challenges/tree/tree').BinaryTree

const one = new Node(9)
const two = new Node(5)
const three = new Node(12)
const four = new Node(3)
const five = new Node(6)
const six = new Node(20)
const seven = new Node(11)

// make a new tree
let BST = new BinarySearchTree()
BST.add(one)
BST.add(two)
BST.add(three)
BST.add(four)
BST.add(five)
BST.add(six)
BST.add(seven)

// make instance of Binary Tree
let BS = new BinaryTree(BST.root)
describe('PSEUDO Test : ', () => {
    it('1. HAPPY PATH ', () => {
        let expected = [9, 5, 12, 3, 6, 11, 20]

        expect(BS.breadthFirst()).toEqual(expected)

    })
    it('2. Expected failure', () => {
        let BSH = new BinarySearchTree()
        let tree = new BinaryTree(BSH.root) 

        expect(tree.breadthFirst()).toEqual('YOUR TREE IS EMPTY')

    })
})