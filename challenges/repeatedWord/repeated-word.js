'use strict';

const HashTable = require('../hashTables/hash-tables')

function repeatedWord(str) {

    const newHash = new HashTable(str.length)
    const arrOfWords = str.match(/\w+/g)
    for (let i  = 0;  i< arrOfWords.length; i++) {
      let word = arrOfWords[i].toLowerCase()
      if(newHash.contains(word)) {
        let val = newHash.get(word)
        if(word === val){
          
          return val
        } 
      }
      newHash.set(word, word)
    }
    return 'No Repeating'
}


module.exports = repeatedWord
  