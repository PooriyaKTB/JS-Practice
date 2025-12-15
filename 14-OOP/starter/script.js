'use strict';
const Person = function (firstName, age) {
  // Constructor Function.  Constructor functions name always start with Capital letter & always called with "new" operator.
  // instance properties
  this.firstName = firstName; // Function declaration also works for Constractor function as function expression (as used here) BUT arrow function does NOT work (mainly because of "this" keyword).
  this.age = age;
  /* 
    this.birthYear = function(){    // This is very bad practice, we should never create a method inside constructor function. because of performance while we creat lots of instances. instead we use prototype and prototype inheritance
        console.log(2025 - this.age)
    }*/
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
  get age() {
    return 2025 - this.birthYear;
  }
}
const pooriya = new PersonClDc('Pooriya', 1992);
console.log(pooriya);
pooriya.calcAge();
console.log(pooriya.age);

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

// ------------------------------------- Section 14 - 227 ----------------------------------------------

const account = {
  owner: 'Pooriya',
  movements: [2000, 600, 800, 5000],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 100;
console.log(account.movements);

class User {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}`);
  }
  get age() {
    return 2025 - this.birthYear;
  }
  set fullName(name) {
    // Set a property that already exists
    if (name.includes(' ')) this._fullName = name;
    // Here the _ is just a convention. whitout _ maximum callstack size exceeded error because of a conflict, both setter function and constructor function trying to set exact same property name.
    else alert('Invalid input');
  }
  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const pooriyaa = new User('pooria ketabi', 1992);
console.log(pooriyaa);
pooriyaa.fullName = 'pooriya ketabi';
console.log(pooriyaa);
console.log(pooriyaa.fullName);
console.log(pooriyaa._fullName);
console.log(pooriyaa.fullName);

User.hey();

// ------------------------------------- Section 14 - 228 ----------------------------------------------

PersonClDc.hey = function () {
  console.log('Hey there');
  console.log(this);
};
PersonClDc.hey();

// ------------------------------------- Section 14 - 229 ----------------------------------------------

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    // It looks like constructor but it's not (beacuase we are not using "new" operator to call this)
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Pooriya2 = Object.create(PersonProto);
console.log(Pooriya2);
Pooriya2.name = 'Pooirya';
Pooriya2.birthYear = 1992;
console.log(Pooriya2);

Pooriya2.calcAge();
console.log(Pooriya2.__proto__);
console.log(Pooriya2.__proto__ === PersonProto);

const pooriya3 = Object.create(PersonProto);
pooriya3.init('Pooriya2', 1992);
console.log(pooriya3);

// ------------------------------------- Section 14 - 230 ----------------------------------------------
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }
}

const Ford = new Car2('Ford', 120);
console.log(Ford);
console.log(Ford.speedUS);
console.log('------');

Ford.accelerate();
// Ford.accelerate();
console.log(Ford);
Ford.brake();
console.log(Ford);
Ford.brake();
console.log(Ford);

Ford.speedUS = 60;
console.log(Ford.speedUS);
console.log(Ford);

// ------------------------------------- Section 14 - 231 ----------------------------------------------
console.log('---231---');

const PersonEx = function (firstName, birthYear) {
  this.firstname = firstName;
  this.birthYear = birthYear;
};

PersonEx.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  /*this.firstName = firstName; 
    this.birthYear = birthYear;  // It is very bad practice, what if Person implementation change in future? does the Student follow it? NO, so we do call Person inside Student as below:
    Person(firstName, birthYear);*/ // Not work, as its regular function call and in regular function calling "this" keyword is set to undefined. So we use "call" method on it to set this keyword manually, as below:
  PersonEx.call(this, firstName, birthYear);

  this.course = course;
};

Student.prototype = Object.create(PersonEx.prototype); // Linking prototypes

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and study ${this.course} course`);
};

const pooriaa = new Student('Pooriya', 1992, 'JS');
console.log(pooriaa);
pooriaa.introduce();
pooriaa.calcAge();

console.log(pooriaa.__proto__);
console.log(pooriaa.__proto__.__proto__);

console.log(pooriaa instanceof Student);
console.log(pooriaa instanceof PersonEx); // is true because of Linking prototypes
console.log(pooriaa instanceof Object);

console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor); // must be Student, NOT PersonEx. so:
Student.prototype.constructor = Student;

// ------------------------------------- Section 14 - 232 ----------------------------------------------

const Car3 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car3.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car3.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car3.call(this, make, speed);
  this.charge = charge;
};

// link the prototypes
EV.prototype = Object.create(Car3.prototype);

// Adding methods to Prototype of EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
};

const tesla = new EV('tesla', 120, 40);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
console.log(tesla);
tesla.accelerate();
console.log(tesla);

// ------------------------------------- Section 14 - 233 ----------------------------------------------

class User2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}`);
  }
  get age() {
    return 2025 - this.birthYear;
  }
  set fullName(name) {
    // Set a property that already exists
    if (name.includes(' ')) this._fullName = name;
    // Here the _ is just a convention. whitout _ maximum callstack size exceeded error because of a conflict, both setter function and constructor function trying to set exact same property name.
    else alert('Invalid input');
  }
  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey User2');
    console.log(this);
  }
}

class Students extends User2 {
  constructor(fullName, birthYear, course) {
    // Always need to happen first!  because this call to the super function is responsible for creating the this keyword in this subclass.
    super(fullName, birthYear); // Super is basically the constructor function of the parent class.
    this.course = course; // if we don't need it, then we don't need to have constructor function at all. because the super function would automatically be called with all the argumaents that are passed into this constructor.
  }
  introduce() {
    console.log(`My name is ${this.fullName} and study ${this.course} course`);
  }
}

const martha = new Students('Martha Jones', 2012, 'IT');
console.log(martha);
martha.introduce();
martha.calcAge();

// ------------------------------------- Section 14 - 235 ----------------------------------------------

class Account {
  //fields:
  local = navigator.language;
  bankName = 'Bankist';

  #movements = [];
  #pin;

  constructor(owner, curreny, pin) {
    this.owner = owner;
    this.curreny = curreny;
    this.#pin = pin; // we canot do what we did on movements, because it depends on input data, So we defined the variable outside of constructor and assign it here
    // this.movements = []; // we added it as a Private field
    // this.locale = navigator.language; // we added it as a Public field, just like bankName

    console.log(`Thanks for opening account with us, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements; // Not chainable method
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // For method chaining
  }

  #approvedLoan(val) {
    // Now it's Private method
    // Fake method implementation
    return true; // For method chaining
  }

  requestLoan(val) {
    if (this.#approvedLoan(val)) {
      this.deposit(val);
    }
    return this; // For method chaining
  }

  static test() {
    // REMEMBER: static methods are not accessible on instances
    console.log('test');
  }
}
const acc1 = new Account('Pooriya', 'GBP', 5543);
console.log(acc1);
acc1.deposit(1000);
acc1.deposit(500);
acc1.movements = [];
// console.log(acc1.#movements); / Throw error because it's a Private field

Account.test();

// Method chaining:
acc1.deposit(1000).withdraw(500).withdraw(200).deposit(2100).withdraw(500);
const movs = acc1
  .deposit(1000)
  .withdraw(500)
  .withdraw(200)
  .deposit(2100)
  .withdraw(500)
  .getMovements();
console.log(acc1);
console.log(movs);
