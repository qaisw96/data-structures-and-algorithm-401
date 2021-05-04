'use strict';

function BinarySearch(arr, value) {
    let lowIndex = 0;
    let highIndex = arr.length - 1

    while(lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2)
        let middleItem = arr[midIndex]
        if(middleItem === value) {
            return midIndex
        }
    
        if(middleItem > value) {
            highIndex = midIndex - 1
        } else {
            lowIndex =  midIndex + 1
        }

    }    

    return -1
}

module.exports = BinarySearch;