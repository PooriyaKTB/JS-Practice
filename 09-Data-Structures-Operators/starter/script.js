'use strict';
/* // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { QUERY_STR } = require('firebase/data-connect');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

for (const ing of italianFoods) {
  // if (mexicanFoods.has(ing)) console.log(ing);
}

const similarElements = italianFoods.intersection(mexicanFoods);
// console.log(similarElements);
// console.log([...similarElements]);

const question = new Map([
  ['Question', 'what is the best programing langauge?'],
  [1, 'Java'],
  [2, 'C'],
  [3, 'JavaScript'],
  ['Answer', 3],
  [true, 'Correct!'],
  [false, 'Try Again!'],
]);

// console.log(question.get('Question'));
for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`${key}: ${value}`);
}
// const userAnswer = Number(prompt('your answer'));
const userAnswer = 3;
// console.log(question.get(userAnswer === question.get('Answer')));

// CHALLENGE4 ----------------------------------------------
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const eventss = [...new Set(gameEvents.values())];
console.log(eventss);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on every ${90/gameEvents.size} minutes.`);

for (const [key,value] of gameEvents) {
  console.log((key < 45) ? `[First Half] ${key}: ${value}` : `[Second Half] ${key}: ${value}`);
}







const events = [...new Set(gameEvents.values())];
// console.log(events);

gameEvents.delete(64);
// console.log(gameEvents);

const lastEvent = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${lastEvent / gameEvents.size} minutes.`);

for (const [time, event] of gameEvents) {
  // console.log((time < 45) ? `[First Half] ${time}: ${event}` : `[Sconde Half] ${time}: ${event}`);
}
// ---------------------------------------------------------

const airline = 'TAP air portugal';
const plane = 'A320';

const checkMidSeat = function (seat) {
  if (seat.slice(-1).toLowerCase() === 'b' || seat.slice(-1).toLowerCase() === 'e') return `${seat} is Middle Seat`
  return `${seat} is Not Middle Seat`
}

// console.log(checkMidSeat('2b'));

const passengerName = 'pOoRiYA'

const corretName = function (passengerName){
  return passengerName[0].toUpperCase() + passengerName.slice(1).toLowerCase()
}

// console.log(corretName(passengerName));

const capitalizer = function(name){
  const names = name.split(' ')
  const capNames=[]
  for (const n of names) capNames.push(n.replace(n[0], n[0].toUpperCase()))
  // for (const n of names) capNames.push(n[0].toUpperCase() + n.slice(1))
  const capName = capNames.join(' ')
  return capName
}

const passenger = 'jessica ann smith davis'
// console.log(capitalizer(passenger));

const maskCreditCard = function (creditCardNumber) {
  // const strNumber = String(creditCardNumber)
  const strNumber = creditCardNumber + ''
  const lastFour = strNumber.slice(-4)
  return lastFour.padStart(strNumber.length, '*')
}

// console.log(maskCreditCard(657483927 3647823));

const italianFoods2 = new Set ([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil'
])

const mexicanFoods2 = new Set ([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic'
])

// console.log([...italianFoods2.intersection(mexicanFoods2)]);

const comb = [...italianFoods2].concat([...mexicanFoods2]);
const uniqueComb = new Set(comb);
// console.log([...uniqueComb]);

const comb2 = [...italianFoods2, ...mexicanFoods2];
const uniqueComb2 = new Set(comb2);
// console.log([...uniqueComb2]);

// console.log([...italianFoods2.union(mexicanFoods2)])
 */
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// function camelCase(data) {
//   const [first, second] = data
//     .toLowerCase()
//     .trim()
//     .replace('/n', '')
//     .replace('_', ' ')
//     .split(' ');
//   // const upperSecond = second[0].toUpperCase() + second.slice(1);
//   const upperSecond = second.replace(second[0], second[0].toUpperCase());
//   const result = [first, upperSecond].join('');
//   return console.log(result);
// }
// console.log('---------------------------------');
// camelCase('under_score');
// camelCase('first_name');
// camelCase('Some_Variable');
// camelCase('calculate_AGE');
// camelCase('delayed_depature');

/*   
document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const eachLine = text.split('\n');
  let count = 1
  const finalised = []
  for (const line of eachLine){
    const eachWord = line.toLowerCase().trim().split('_')
    const capitalWord = eachWord[0].concat(eachWord[1].replace(eachWord[1][0], eachWord[1][0].toUpperCase()))
    const result = finalised.push(capitalWord.padEnd(20,' ') + ('✅'.repeat(count))) 
    count++
  }
  return console.log(finalised.join('\n'));
});
 */

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const eachLine = text.split('\n');
  for (const [indx, line] of eachLine.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');
    const capitalWord = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`; //eachWord[0].concat(eachWord[1].replace(eachWord[1][0], eachWord[1][0].toUpperCase()))
    console.log(`${capitalWord.padEnd(20)}${'✅'.repeat(indx + 1)}`);
  }
});
// function toCamelCase(){

// console.log('---------------------------------');
// console.log(toCamelCase('under_score\n   first_name\nSome_Variable\n        calculate_AGE\ndelayed_depature')); ;
