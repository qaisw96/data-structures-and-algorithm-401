'use strict';

const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter')
const Cat = require('../challenges/fifoAnimalShelter/cats&dogs-classes').Cat
const Dog = require('../challenges/fifoAnimalShelter/cats&dogs-classes').Dog

// cats and dogs objects to test 
let lucy = new Cat('lucy', 2, 'cat', 'white')
let lemon = new Cat('lemon', 2, 'cat', 'yellow')

let tomas = new Dog('tomas', 4, 'dog', 'black')
let sam = new Dog('sam', 4, 'dog', 'blue')

describe('Animal Shelter Class test : ', () => {
    it('1. “Happy Path” - Expected outcome', () => {
        let shelter = new AnimalShelter()
        shelter.enqueue(lucy)
        // enqueue
        expect(shelter.storage).toEqual(lucy)

        shelter.enqueue(tomas)
        shelter.enqueue(lemon)
        expect(shelter.storage).toEqual(lemon)
        expect(shelter.storage.next).toEqual(tomas)
        expect(shelter.storage.next.next).toEqual(lucy)

        // dequeue
        expect(shelter.dequeue('dog').type).toEqual('dog')
        expect(shelter.dequeue('cat').type).toEqual('cat')

    })

    it('Expected failure', () => {
        const elephant = new Dog('elephant', 20, 'elephant' , 'gray', )
        let shelter = new AnimalShelter()

        // enqueue
        let result = shelter.enqueue(elephant)
        expect(result).toEqual('INSERT DOGS AND CATS ONLY')
        expect(shelter.storage).toEqual(null)

        // dequeue
        shelter.enqueue(lucy)
        shelter.enqueue(tomas)
        shelter.enqueue(lemon)

        expect(shelter.dequeue('cow')).toBeNull()
    
    })
})