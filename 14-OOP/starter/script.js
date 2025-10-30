'use strict';
const Person = function(firstName, age){  // Constructor Function.  Constructor functions name always start with Capital letter & always called with "new" operator.
    // instance properties
    this.firstName = firstName;           // Function declaration also works for Constractor function as function expression (as used here) BUT arrow function does NOT work (mainly because of "this" keyword).
    this.age = age
/* 
    this.birthYear = function(){    // This is very bad practice, we should never create a method inside constructor function. because of performance while we creat lots of instances. instead we use prototype and prototype inheritance
        console.log(2025 - this.age)
    } 
*/
}

Person.prototype.birthYear = function(){
    console.log(2025-this.age)
}

console.log(Person.prototype);

console.log('-----------');


const me = new Person('pooriya', 33)     
// What happend when we call a Constractor function with "new" operator: 
// 1- new empty Object will create. => {}  
    // 2- function is called, "this" keyword will set to newly created object. => this = {}  
    // 3- newly created object linked to a prototype. => {} linked to prototype. 
    // 4- newly created object will automatically return from constructor function. => function automatically return {} (not empty anymore) 
    console.log(me);
    const me2 = "Person"
    console.log(me instanceof Person);
    console.log(me2 instanceof Person);
    
    
// me.birthYear()
   
 me.birthYear()
