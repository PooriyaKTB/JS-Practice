'use strict';
/* 
// -------------------------------------139---------------------------------------
const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hi')('pooriya')
 */

// -------------------------------------141---------------------------------------
/* 
const addTax = function (rate,value){
    return value = value + value*rate
    }
    
    const addVat = addTax.bind(null, 0.1)
    
    console.log(addVat(200));


    const addTax2 = function (rate) {
        rate = 0.1;
        return function (value) {
            return value + value * rate;
        };
    };
    const taxVat2 = addTax2(0.1);
    
    console.log(addTax2(0.1)(100));
    console.log(taxVat2(200));
    */

// -------------------------------------142---------------------------------------
/* 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  
  registerNewAnswer() {
    const userAnswer = Number(prompt(`${this.question}\n${(this.options).join('\n')}\nEnter only option number!`))+1;
    
    // typeOf(userAnswer) === 'number' && userAnswer < this.answers.length && this.answers[userAnswer]++;
    userAnswer && typeof(userAnswer) === 'number' && userAnswer >= 1 && userAnswer <= 4
    ? this.answers[userAnswer-1]++
    : alert(`Not correct input`);
    
    const userType = prompt('type?');
    
    this.displayResult(userType);
    },
    displayResult(type = 'string') {
      const enteredType = String(type.toLocaleLowerCase())
      if (enteredType === 'string') {
        console.log(`Poll results are:\n${this.answers.join(', ')}`);
        alert(`Poll results are:\n${this.answers.join(', ')}`);
        } else if (enteredType === 'array') {
          console.log(this.answers);
          alert(this.answers);
          } else {
            alert(`Entered type is not valid, here is result in string type:\n${this.answers}`);
          console.log(this.answers);
          }
          },
          };
          
          document
          .querySelector('.poll')
          .addEventListener('click', poll.registerNewAnswer.bind(poll));
          
          const Data1 = [5, 2, 3];
          const Data2 = [1, 5, 3, 9, 6, 1];
          const functi = poll.displayResult;
          functi.call({answers: Data1}, 'string')
          functi.call({answers: Data2}, 'string')
          */
// -------------------------------------146---------------------------------------

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
document.querySelector('body').addEventListener('click', function(){
  header.style.color = 'blue'
})
})();