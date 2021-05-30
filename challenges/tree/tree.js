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
                        console.log('from less');
                        if(node.left) {
                            if(node.left.value == value) {
                                console.log(true); 
                                return true
                            } else {
                            }
                        } else {
                            return false
                        }
                    }
                    
                    if(value > node.value) {
                        console.log('from more');
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

// let node = new Node(9)
// let node2 = new Node(4)
// let node3 = new Node(15)
// let node4 = new Node(3)
// let node5 = new Node(20)

// let BST = new BinarySearchTree() 
// BST.add(node)
// BST.add(node2)
// BST.add(node3)
// BST.add(node4)
// BST.add(node5)
// console.log(BST);

// const BT = new BinaryTree(BST)
// console.log(BT.findMaximumValue());

module.exports = {
    BinarySearchTree,
    BinaryTree
}