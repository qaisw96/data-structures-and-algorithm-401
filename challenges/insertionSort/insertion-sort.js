'use strict';

function InsertionSort(arr) {
  if(!arr || arr.length == 0) return 'ENTER AN ARRAY'

  for(let i=1; i<arr.length; i++) {
    let j = i - 1
    let temp = arr[i]

    while(j >= 0 && temp < arr[j]) {
      arr[j+1] = arr[j]
      j = j - 1
    }
    arr[j+1] = temp
  }
  return arr; 
}
  

module.exports = InsertionSort
