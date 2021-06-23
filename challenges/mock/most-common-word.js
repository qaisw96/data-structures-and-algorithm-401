function mostCommonWord(str) {
    const newHashT = new HashTable(512)
    let counter = 0
    let results = ['word', 0]
    let arrOfWords = str.match(/\w+/g)
    
    for (let i = 0; i < arrOfWords.length; i++) {
        let word = arrOfWords[i].toLowerCase()
        if(newHashT.contains(word)) {
            let preValue = newHashT.get(word)
            newHashT.set(word, preValue++)
            if( preValue >  arr[1]) {
                results = []
                results.push(word, preValue)
            } 
        } else {
            newHashT.set(word, counter)
        }
    }
    return arr[0]
}