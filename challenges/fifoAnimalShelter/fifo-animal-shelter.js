'use strict';
class Cat {
    constructor(name, age, type, color) {
        this.name = name
        this.age = age
        this.type = type
        this.color = color
        this.next = null
    }
}

class Dog extends Cat {
    constructor(name, age, type, color) {
        super(name, age, type, color)
    }
}

let lucy = new Cat('lucy', 2, 'cat', 'white')
let lam = new Dog('lam', 4, 'dog', 'black')
let sam = new Dog('sam', 4, 'dog', 'blue')

// console.log(lucy);
// console.log(lam);

class AnimalShelter {
    constructor() {
        this.storage = null
    }

    enqueue(animal) {
        if( this.storage == null ) {
             this.storage = animal
            } else {
                console.log('inside');

             const newAS = this.storage
             this.storage = animal    
            console.log('storage', this.storage);
            console.log('newAS', newAS);
                
            let current = newAS
             while( current ) {
                this.storage.next = current
                console.log('this.storage', this.storage);
            
              current = current.next
             }
            //  return this
            }
    }
}

let newObj = new AnimalShelter()
newObj.enqueue(lucy)
newObj.enqueue(lam)
newObj.enqueue(sam)

console.log(newObj);