'use strict';

function quickSort(arr) {
    if(arr.length <= 1) return arr
    // if(arr.length === 1 || arr.length ==0) return arr

    let pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []

    for( const el of arr.slice(0, arr.length-1) ) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    // if(leftArr.length > 0 && rightArr.length > 0) {
    // } else if(leftArr.length > 0) {
    //     return [...quickSort(leftArr), pivot]
    // }else {
    //     return [pivot, ...quickSort(rightArr)]
    // }
}
module.exports = quickSort
