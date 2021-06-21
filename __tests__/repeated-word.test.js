'use strict';

const repeatedWord = require('../challenges/repeatedWord/repeated-word')

const one = 'Once upon a time, there was a brave princess who...'
const two = `It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...`
const three = 'There is no repeated in this string'
describe('Repeated Word Function Testing :):::: ', () => {
    it('1. “Happy Path” - Expected outcome ', () => {
        expect('a').toEqual(repeatedWord(one))
        expect('summer').toEqual(repeatedWord(two))
        
    })
    
    it('2. “Expected failure”  ', () => {
        expect('No Repeating').toEqual(repeatedWord(three))
        
    })

})