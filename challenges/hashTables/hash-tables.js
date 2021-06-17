'use strict';
const { LinkedList } = require("../linkedList/linked-list");

 
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);

    }

    hash(key) {
        const sum = key.split('').reduce((acc, val) => acc + val.charCodeAt(0), 0)
        return (sum * 19) % this.size
    }

    set(key, value) {
        if(typeof key == 'number') return 'String only'
        const hashed = this.hash(key);
        if(!this.table[hashed]) this.table[hashed] = new LinkedList()
        this.table[hashed].insert({[key] : value})
    }

    get(key) {
        const hashed = this.hash(key)
        const ll = this.table[hashed]
        if(!ll) return 'Key Does Not Exist'
        let current = ll.head
        while(current) {
            if(Object.keys(current.value)[0] == key) return current.value[key]
            current = current.next
        }
        return 'Key Does Not Exist'
    }

    contains(key) {
       return this.get(key) == 'Key Does Not Exist' ? false : true
    }
}

module.exports = HashTable

