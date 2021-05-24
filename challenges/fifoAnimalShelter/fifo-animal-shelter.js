'use strict';


class AnimalShelter {
    constructor() {
        this.storage = null
    }

    enqueue(animal) {
        if(animal.type == 'cat' || animal.type == 'dog' ) {
            if( this.storage == null ) {
                 this.storage = animal
                } else {
                 const newAS = this.storage
                 this.storage = animal
                this.storage.next = newAS
                }
        } else {
            return 'INSERT DOGS AND CATS ONLY'
        }
    }
    
    dequeue(pref) {
        if(pref == 'cat' || pref == 'dog' ) {

            if(this.storage) {
                let current = this.storage
                let tem;
               while(current) {
                    if(current.type == pref) {
                        tem = current
                        // current.next = null
                        // return current
                        break;
                    }
                    current = current.next
                }
                tem.next = null;
                return tem
            } 
        } else {
            return null
        }
    }

}

module.exports = AnimalShelter