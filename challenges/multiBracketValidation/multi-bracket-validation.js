'use strict'

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack

function multiBracketValidation(str) {
    if(!str || typeof str === 'number') return 'ONLY STRING ACCEPTED'
    let stack = new Stack()
    const arr = str.split('')
    let bracket = {
        '}':'{',
        ')':'(',
        ']':'['
      }
    let check = true 
    for (let i = 0; i < arr.length; i++) {
        if(/[\{\[\(]/.test(arr[i])) {
            stack.push(arr[i]) 
        } else if (/[\}\]\)]/.test(arr[i]) && !stack.top) {
           check = false;
        } else if (/*/[\}\]\)]/.test(arr[i]) &&*/ stack.top) {
            if( stack.top.value == bracket[arr[i]]){
                stack.pop()
            } 
        }
    }
    let result;
    stack.top == null && check? result = true : result = false;

    return result
}

module.exports = multiBracketValidation;


// console.log(newA)

