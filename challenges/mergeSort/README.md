# Hash-Tables
Is a data structure, a way to sort data in array with chaining by hashed key as an index   

## Challenge
Write a Hash-table template by ES6 class with some methods like : hash / set / get / contains

## Approach & Efficiency
Time Complexity ===> O(1) ,  and probably O(n) in some situations ( like key inside chaining ) 
## API
1. add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. get: takes in the key and returns the value from the table.
3. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. hash: takes in an arbitrary key and returns an index in the collection.
