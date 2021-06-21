// 'use strict';

// const Node = require('../challenges/tree/node')
// const BinarySearchTree = require('../challenges/tree/tree').BinarySearchTree
// const BinaryTree = require('../challenges/tree/tree').BinaryTree

// const one = new Node(9)
// const two = new Node(5)
// const three = new Node(12)
// const four = new Node(3)
// const five = new Node(6)
// const six = new Node(20)
// const seven = new Node(11)

// // make a new tree
// let BST = new BinarySearchTree()
// BST.add(one)
// BST.add(two)
// BST.add(three)
// BST.add(four)
// BST.add(five)
// BST.add(six)
// BST.add(seven)

// // make instance of Binary Tree
// let BS = new BinaryTree(BST.root)
// describe('PSEUDO Test : ', () => {
//     it('1. HAPPY PATH ', () => {
//         let expected = [9, 5, 12, 3, 6, 11, 20]

//         expect(BS.breadthFirst()).toEqual(expected)

//     })
//     it('2. Expected failure', () => {
//         let BSH = new BinarySearchTree()
//         let tree = new BinaryTree(BSH.root) 

//         expect(tree.breadthFirst()).toEqual('YOUR TREE IS EMPTY')

//     })

//     // it('should return an array with one value', () => {
//         //     expect(BST.breadthFirst()).toEqual([10]);
//         // });
        
        
//     it('should return an array with breadth first traverse', () => {
//         let BST = new BinarySearchTree();
//         BST.add(new Node(10))
//         BST.add(new Node(5))
//         BST.add(new Node(15))
//         BST.add(new Node(3))
//         BST.add(new Node(7))
//         BST.add(new Node(1))
//         BST.add(new Node(4))
//         BST.add(new Node(12))
//         BST.add(new Node(18))
//         BST.add(new Node(6))
//         BST.add(new Node(5))
//         BST.add(new Node(11))
//         BST.add(new Node(14))
//         BST.add(new Node(16))
//         BST.add(new Node(19))
//         BST.add(new Node(100));
//         let BS = new BinaryTree(BST.root)
//         console.log('from test', BS.breadthFirst());
//         expect(BS.breadthFirst()).toEqual([
//             10,  5, 15,   3, 7, 12,
//             18,  1,  4,   6, 8, 11,
//             14, 16, 19, 100
//           ])
//     });

// })
