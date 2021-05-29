'use strict';

const Stack = require('../challenges/stacksAndQueues/stacks-and-queues').Stack
const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation')

const one = '{}{Code}[Fellows](())'
const two = '()[[Extra Characters]]'
const three = '(){}[[]]'
const four = '[({}]'
const five = '{(})'
const six = '(]('
const seven = '{'
const eight = '[}'
describe('Multi Bracket Balanced Test : ', () => {
    it('1. “Happy Path” - Expected outcome ', () => {

        expect(multiBracketValidation(one)).toBeTruthy()
        expect(multiBracketValidation(two)).toBeTruthy()
        expect(multiBracketValidation(three)).toBeTruthy()
        expect(multiBracketValidation(four)).toBeFalsy()
        expect(multiBracketValidation(five)).toBeFalsy()
        expect(multiBracketValidation(six)).toBeFalsy()
        expect(multiBracketValidation(seven)).toBeFalsy()
        expect(multiBracketValidation(eight)).toBeFalsy()
    })

    it('2. “Expected failure”  ', () => {

        expect(multiBracketValidation()).toEqual('ONLY STRING ACCEPTED')
        expect(multiBracketValidation(55)).toEqual('ONLY STRING ACCEPTED')
    })
})