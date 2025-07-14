/*
//----------------------Exercise 5-----------------------
'use strict';
 function userAge(year) {
    return 2025 - year;
 }

 function retirment (name, birthYear) {
    return userAge(birthYear) >= 65 ? `${name} is already retired.` : `${name} gonna retired after ${65-userAge(birthYear)} years.`
 }

 console.log(retirment("pooriya", 1995))

//----------------------Exercise 6-1---------------------

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

const bills = [125, 555, 44];

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(tips);
console.log(total);

//----------------------Exercise 6-2---------------------

const tips = []

const calcTip = bill => bill >= 50 && bill <=300 ? tips.push(bill * 0.15) : tips.push(bill * 0.2);

const bills = [125, 555, 44];

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(tips);
console.log(total);

*/
//----------------------Exercise 6-3---------------------


// const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

// console.log(tips, total);

//----------------------Exercise 7-1---------------------

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass:92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/

//----------------------Exercise 8-1---------------------

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
  
const bills = [22, 295, 176, 440 ,37 ,105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
  
for (let i = 0; i < bills.length; i++) {
    // tips.push(calcTip(bills[i]))
    // totals.push(calcTip(bills[i])+bills[i])
    // ---OR---
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
};

console.log(tips);
console.log(totals);

function calcAverage (arr) {
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}


console.log(calcAverage(tips))
console.log(calcAverage(totals))