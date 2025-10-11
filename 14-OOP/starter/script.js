'use strict';
const Person = function(firstName, age){  // Constructor Function.  Constructor functions name always start with Capital letter & always called with "new" operator.
    this.firstName = firstName;           // Function declaration also works for Constractor function as function expression (as used here) BUT arrow function does NOT work (mainly because of "this" keyword).
    this.age = age
}

const me = new Person('pooriya', 33)     // What happend when we call a Constractor function with "new" operator: 1- new empty Object will create. => {}  2- function is called, "this" keyword will set to newly created object. => this = {}  3- newly created object linked to a prototype. => {} linked to prototype. 4- newly created object will automatically return from constructor function. => function automatically return {} (not empty anymore) 
console.log(me);