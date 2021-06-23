'use strict'
const HashTable = require('../hashTables/hash-tables')

function hashMapTreeIntersection(tree1, tree2) {
    if(!tree1 || !tree2) return 'TREES ARE EMPTY OR MAYBE ONE'
    let t1 = tree1.preOrder()
    let t2 = tree2.preOrder()
    let size = t1.length + t2.length
    let results = []

    let newHashT = new HashTable(size)

    for (let i= 0; i< t1.length; i++) {
        newHashT.set(t1[i].toString(), t1[i])
    }

    for (let i = 0; i < t2.length; i++) {
      if(newHashT.contains(t2[i].toString())) {
          results.push(t2[i])
      }
    }

    return results 
}

module.exports = hashMapTreeIntersection