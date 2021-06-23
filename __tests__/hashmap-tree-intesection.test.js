'use strict';
const BinaryTree = require('../challenges/tree/tree').BinaryTree;
const hashMapTreeIntersection = require('../challenges/hashMapTreeIntersection/hashmap-tree-intersection');
const Node = require('../challenges/tree/node')



let tree1 =new BinaryTree();
let root = tree1.root = new Node(1);
let left = root.left = new Node(2);
let right = root.right = new Node(3);
left.left = new Node(4);
left.right = new Node(7);
right.left = new Node(50);
right.right = new Node(60);


let tree2 =new BinaryTree();
let root2 = tree2.root = new Node(1);
let left2 = root2.left = new Node(2);
let right2 = root2.right = new Node(30);
left2.left = new Node(4);
left2.right = new Node(7);
right2.left = new Node(5);
right2.right = new Node(6);

describe(' hashMap Tree Intersection Testing :: ', () => {
    it('1. “Happy Path” - Expected outcome  :):: ', () => {
        let expected = [ 1, 2, 4, 7 ]
        expect(hashMapTreeIntersection(tree1,tree2)).toEqual(expected );
        
    })
    
    it('2. “Expected failure”  :(:: ', () => {
        let t1 = new BinaryTree() 
        let t2 = new BinaryTree()

        expect(hashMapTreeIntersection(t1.root,t2.root)).toEqual( 'TREES ARE EMPTY OR MAYBE ONE');
        
    })

})