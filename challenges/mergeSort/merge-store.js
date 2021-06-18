'use strict';

const merge = (leftArr, rightArr) => {
    let result = []

    while(leftArr.length && rightArr.length) {
        leftArr[0] <= rightArr[0] ? result.push(leftArr.shift()) : result.push(rightArr.shift())
    }

    while(leftArr.length) result.push(leftArr.shift())
    while(rightArr.length) result.push(rightArr.shift())

    return result

}

function MergeSort(arr) {
    if(arr.length < 2) return arr;

    const midInx = Math.floor(arr.length/2)

    let leftArr = arr.slice(0, midInx)
    let rightArr = arr.slice(midInx)

    return merge(MergeSort(leftArr), MergeSort(rightArr))
}

module.exports = MergeSort
