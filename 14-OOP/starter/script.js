'use strict';
const Person = function (firstName, age) {
  // Constructor Function.  Constructor functions name always start with Capital letter & always called with "new" operator.
  // instance properties
  this.firstName = firstName; // Function declaration also works for Constractor function as function expression (as used here) BUT arrow function does NOT work (mainly because of "this" keyword).
  this.age = age;
  /* 
    this.birthYear = function(){    // This is very bad practice, we should never create a method inside constructor function. because of performance while we creat lots of instances. instead we use prototype and prototype inheritance
        console.log(2025 - this.age)
    } 
*/
};

Person.prototype.birthYear = function () {
  console.log(2025 - this.age);
};

console.log(Person.prototype);

console.log('-----------');

const me = new Person('pooriya', 33);
// What happend when we call a Constractor function with "new" operator:
// 1- new empty Object will create. => {}
// 2- function is called, "this" keyword will set to newly created object. => this = {}
// 3- newly created object linked to a prototype. => {} linked to prototype.
// 4- newly created object will automatically return from constructor function. => function automatically return {} (not empty anymore)
console.log(me);
const me2 = 'Person';
console.log(me instanceof Person);
console.log(me2 instanceof Person);

// me.birthYear()

me.birthYear();

console.log(me.__proto__); // __proto__ property comes from step 3 on calling constructor function via new keyword. and it sets its value to the prototype property of the function that is being callled.
console.log(me.__proto__ === Person.prototype); // NOTE: Person.prototype is not actually thr prototype of person. Butt instead it is what's gonna be used as the protoype of all the objects that are created with the Person constructor function.
console.log(Person.prototype.isPrototypeOf(me)); // NOTE: to make it easier to understand, think of the prototype property as prototype of linked object property. (eg: .prototypeOfLinkedObject)
Person.prototype.gen = 'adult';

console.log(me.hasOwnProperty('firstName'));
console.log(me.hasOwnProperty('gen'));

// ------------------------------------- Section 14 - 224 ----------------------------------------------

console.log(me.__proto__);
console.log(me.__proto__.__proto__);
console.log(me.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

// ------------------------------------- Section 14 - 225 ----------------------------------------------

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const Bmw = new Car('BMW', 120);
const Benz = new Car('Benz', 95);

console.log(Bmw);
console.log(Benz);
Bmw.accelerate();
Bmw.brake();
Bmw.brake();
Bmw.brake();

// ------------------------------------- Section 14 - 226 ----------------------------------------------

// NOTE: although we use class keyword, it's just a syntatic sugar, So that behind the scenes classes are still function. therefore we have class expresion and declaration.
// Class expression
const PersonClEx = class {};

// Class declaration
class PersonClDc {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
}
const pooriya = new PersonClDc('Pooriya', 1992);
console.log(pooriya);
pooriya.calcAge();

console.log(pooriya.__proto__ === PersonClDc.prototype);

// Adding method manually
PersonClDc.prototype.greet = function () {
  console.log(`hey ${this.firstName}`);
};
pooriya.greet();

/* 
// NOTES:
1. Classes are not hoisted
2. Classes are first-class citizens. we can pass them into a function or return them from functions
3. Classes are always executed in strict mdoe
*/
