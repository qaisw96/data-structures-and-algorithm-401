'use strict';

class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;        
    }
}


class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    inOrder() {
        let result = [];
        let traverse = (node) => {
            if(node.left) traverse(node.left)
            result.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }
    
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result

    }

    findMaximumValue() {
        if(this.root) {
            let maxValue = this.root.value;
            let traverse = (node) => {
                if(maxValue < node.value) maxValue = node.value
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
            return maxValue
        } else {
            return 'YOUR TREE IS EMPTY'
        }
    }

    breadthFirst() {
        if(!this.root) return 'YOUR TREE IS EMPTY'
        let result = [];
        result.push(this.root.value)
        let test = 0
        let storage;
        let traverse = (node) => {
            if(node.left) result.push(node.left.value)
            if(node.right) result.push(node.right.value)
            test++
            if(test%2) {
                storage=node
                if(node.left) traverse(node.left)
                if(storage.right) traverse(storage.right)
            } else {
                // console.log('from right first', result)
                if(storage.right) traverse(storage.right)
                if(node.left) traverse(node.left)
            }
        }
        traverse(this.root)
        return result
    }
}



class BinarySearchTree {
    constructor (root = null) {
        this.root = root;
    }

    add(newNode) {
        if(!this.root) {
            this.root = newNode 
        }else {
            let traverse = (node) => {
                if(newNode.value <= node.value) {
                    if(node.left) {
                        traverse(node.left)
                    } else {
                        node.left = newNode
                    }
                } 
                if(newNode.value >= node.value) {
                    if(node.right) {
                        traverse(node.right)
                    } else {
                        node.right = newNode
                    }
                } 
            }
            traverse(this.root)
        }
    }

    contains(value) {
        if(value) {
            let traverse = (node) => {
                if(node.value == value) {
                    console.log(true)
                } else {

                    if(value <= node.value) {
                        if(node.left) {
                            if(node.left.value == value) {
                                return true
                            } else {
                                traverse(node.right)
                            }
                        } else {
                            return false
                        }
                    }
                    
                    
                    if(value > node.value) {
                        if(node.right) {
                            if(node.right.value == value) {
                                return true; 
                            } else {
                                traverse(node.left)
                            }
                        } else {
                            return false; 
                        }
                    }
                }
                }
            traverse(this.root)
          
        } else {
            return 'Enter Correct Value'
        }
    }
}

let node = new Node(9)
let node2 = new Node(4)
let node3 = new Node(12)
let node4 = new Node(3)
let node5 = new Node(5)
let node6 = new Node(14)
let node7 = new Node(11)
let node8 = new Node(1)
let node9 = new Node(0)
// let node9 = new Node(2)

let BST = new BinarySearchTree() 
BST.add(node)
BST.add(node2)
BST.add(node3)
BST.add(node4)
BST.add(node5)
BST.add(node6)
BST.add(node7)
BST.add(node8)
BST.add(node9)
// BST.add(node9)
// console.log(BST);

const BT = new BinaryTree(BST.root)
console.log(BT);
console.log(BT.breadthFirst());

module.exports = {
    BinarySearchTree,
    BinaryTree
}