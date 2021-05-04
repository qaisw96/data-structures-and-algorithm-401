function reverseArray (arr) {
    let sum = 1
    let newArr =[]
    for(let i=0; i<arr.length; i++) {
        newArr.push(arr[arr.length - sum])
        sum++
    }
    return newArr
}
