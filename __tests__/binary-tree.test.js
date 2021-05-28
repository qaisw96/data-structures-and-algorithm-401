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

let tree = new BinarySearchTree()
tree.add(one)
tree.add(two)
tree.add(three)
tree.add(four)
tree.add(five)
tree.add(six)
tree.add(seven)

console.log(tree);

describe('Binary Tree Test : ', () => {
    it('1. Can successfully instantiate an empty tree', () => {
        const tree = new BinarySearchTree() 
        
        expect(tree.root).toBeNull()
    })

    it('2. Can successfully instantiate a tree with a single root node', () => {
        let node = new Node(5)
        let tree = new BinarySearchTree(node)

        expect(tree.root).toBe(node)
        expect(tree.root.right).toBeNull()
        expect(tree.root.left).toBeNull()
    })

    it('3. Can successfully add a left child and right child to a single root node', () => {
        const one = new Node(5)
        const two = new Node(3)
        const three = new Node(7)

        let tree = new BinarySearchTree()
        tree.add(one)

        tree.add(two)
        tree.add(three)

        expect(tree.root.left).toBe(two)
        expect(tree.root.right).toBe(three)
    })


    it('4. Can successfully return a collection from a preOrder traversal', () => {
        
        let expectedR = [9, 5, 3, 6, 12, 11, 20]
        let newTree = new BinaryTree(tree.root)

        console.log(newTree.preOrder());
        expect(expectedR).toEqual(newTree.preOrder())
        
    })
    it('5. Can successfully return a collection from a inOrder traversal', () => {
        
        let expectedR = [3, 5, 6, 9, 11, 12, 20]
        let newTree = new BinaryTree(tree.root)
    
        expect(expectedR).toEqual(newTree.inOrder())
        
    })
    it('6. Can successfully return a collection from a postOrder traversal', () => {
        
        let expectedR = [3, 6, 5, 11, 20, 12, 9]
        let newTree = new BinaryTree(tree.root)
    
        expect(expectedR).toEqual(newTree.postOrder())
    })
})