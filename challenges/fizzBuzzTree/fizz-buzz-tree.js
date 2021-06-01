'use strict';

class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

class Tree {
    constructor(tree) {
        this.root = tree
    }
}

const one = new Node(10)
one.children[0] = new Node(5)
one.children[1] = new Node(8)
one.children[2] = new Node(9)
one.children[3] = new Node(15)
one.children[3].children[0] = new Node(16)
one.children[3].children[1] = new Node(30)
one.children[3].children[2] = new Node(45)
// console.log(one);

let tree = new Tree(one)
// console.log(tree);

FizzBuzzTree (tree) 
function FizzBuzzTree (tree) {
    if(!tree.root) return 'YOUR TREE IS EMPTY' 
    const newTree = tree
    let traversal = (node) => {
        if (node.value%15===0) node.value='FizzBuzz'; 
        if(node.value%5===0) node.value='Fizz';
        if(node.value%3===0) node.value= 'Buzz';
        else if(node.value= `${node.value}`);

        for (let i = 0; i < node.children.length; i++) {
            traversal(node.children[i])
        }

    }
    traversal(newTree.root)
    return newTree;

}

module.exports = {
    Node,
    Tree,
    FizzBuzzTree
}






