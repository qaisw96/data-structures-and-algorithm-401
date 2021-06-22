'use strict';

function hashMapLeftJoin(H1, H2) {
    const subArr = []
    const results = []
    for (let i = 0; i < H1.table.length; i++) {
        for (let j = 0; j < H2.table.length; j++) {
            if(H1.table[i] && H1.table[j]) {

                if( Object.keys(H1.table[i]) === Object.keys(H1.table[j]) ) {
                    subArr.push( Object.keys(H1.table[i]) ,H1.table[i].value, H2.table[j])
                }
                
            }
        }
        results.push(subArr)   
    }

    return results
}

module.exports = hashMapLeftJoin