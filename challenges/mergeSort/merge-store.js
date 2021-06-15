'use strict';

function MergeSort(arr) {
    if(arr.length < 2) return arr
    let n = Math.floor(arr.length / 2);
    let left = arr.slice(0, n);
    let right = arr.slice(n);
    MergeSort(left)
    MergeSort(right)
    Merge(left, right, arr)
    return arr;
}
function Merge(left, right, arr) {
    let i = 0
    let j = 0
    let k = 0
    while(i<left.length && j<right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i]
            i++
        } else {
            arr[k] = right[j]
            j++
        }
        k++
    }
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
      }
      while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
      }
}

module.exports = MergeSort