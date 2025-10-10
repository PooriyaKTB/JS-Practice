'use strict';
const Person = function(firstName, age){
    this.firstName = firstName;
    this.age = age
}

const me = new Person('pooriya', 33)
console.log(me);