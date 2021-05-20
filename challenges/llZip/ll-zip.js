'use strict';

const LinkedList = require('../linkedList/linked-list')



function zipLists(Ll1, Ll2) { 
    let newLl = new LinkedList()

    let Ll1Length = Ll1.linkedLength(Ll1)
    let Ll2Length = Ll2.linkedLength(Ll2)
    let longerN;
    let shorterN;

    if(Ll1Length>= Ll2Length) {
        longerN = Ll1Length
        shorterN = Ll2Length
    }  else {
        longerN = Ll2Length
        shorterN = Ll1Length
    }

    let currentN1 = Ll1.head
    let currentN2 = Ll2.head
    for(let i=0; i<longerN; i++) {
        if(Ll2Length>=Ll1Length){

            if(shorterN) {
                newLl.insert(currentN1.value)
                currentN1 = currentN1.next
                shorterN--
            }  
            newLl.insert(currentN2.value)
            currentN2 = currentN2.next
            } else {
                newLl.insert(currentN1.value)
                currentN1 = currentN1.next
                
                if(shorterN) {
                    newLl.insert(currentN2.value)
                    currentN2 = currentN2.next
                    shorterN--
                }  
        }
    }

    return newLl
}

module.exports = zipLists;