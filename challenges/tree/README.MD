# Trees

Tree : is a non-linear data structure allows us to store, search , add values or nodes with efficient Time complexity  

## Challenge

+ Create a BinaryTree class with three traversal methods
+ Create a BinarySearchTree class that have two methods, one for add nodes, and another for searching for a value 

## Approach & Efficiency

Big O ==> O( log n ) 

## API
<!-- Description of each method publicly available in each of your trees -->


## ---------------------------------------------------

# find-maximum-value

## Challenge Summary
Write an instance method called find-maximum-value.  return the maximum value stored in the tree

## Whiteboard Process
![](../../assets/images/code16.jpg)
## Approach & Efficiency
Big O ===> O ( log n )

## Solution
```
root.value   5  ==> 4==> 9==> 8 ==> so on

biggest  5 / 4 / 9/ 20   then stop

biggest == 9

return 9


```

## ---------------------------------------------------

# first-breadth method

## Challenge Summary
Write a breadth first traversal method which takes a Binary Tree as its unique input traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.
## Whiteboard Process
![](../../assets/images/code17.jpg)
## Approach & Efficiency
Big O ===> O ( log n )

## Solution
```
array   5 ==> 4==> 9 

array   5 ==> 4==> 9 ==> 5 ==> 2

array   5 ==> 4==> 9 ==> 5 ==> 2 ==> 9 ==> 12

return array


```
