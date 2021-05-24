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

module.exports = {
    Cat,
    Dog
}