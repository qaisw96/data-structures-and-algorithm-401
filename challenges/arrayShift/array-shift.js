'use strict';

function insertShiftArray(arr, value) {
    
    let length = arr.length/2
    if(!(arr.length%2 === 0)){
        length++
    } 

    let subArr1 = arr.slice(0, length)
    let subArr2 = arr.slice( length, arr.length)

    subArr1.push(value)

    subArr2.forEach(elm => {
        subArr1.push(elm)
    });
    return subArr1;
}

module.exports = insertShiftArray;
