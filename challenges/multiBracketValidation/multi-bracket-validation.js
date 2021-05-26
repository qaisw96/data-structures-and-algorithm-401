'use strict';

function multiBracketValidation(str) {
    let brackets = str.replace(/[0-9]|[a-z]/gi, '')
    brackets = brackets.replace(/}/g, ')').replace(/]/g, ')').replace(/\s+/g, '').split('')
    console.log(brackets);
    let arr = []
    const newA =  brackets.map(elm => {
        if(elm == '{' ||  elm== '[' || elm == '(') {
            elm = '@'
            arr.push(elm)
        }
        return elm
    })
    if (!(brackets.length%2)) {
        
        if(newA.length/arr.length == 2) {
            console.log(true);
        } else {
            console.log(false);
        }
        
        
    } else {
        console.log(false); 
    }
    console.log(arr);
    console.log(str);
}

multiBracketValidation('()[[Extra Characters]]')



// console.log(newA)

