const obje = {
  firstName: "Pooriya",
  lastName: "ketabi",
  birthDate: 1992,
  job: ["SE", "chef"],
};

const objMap = new Map(Object.entries(obje));
// console.log(objMap);
// console.log(objMap.get("job"));

// ------------------------------------- Section 12 - 182 ----------------------------------------------

const createRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(createRandomInt(20, 25));

// ------------------------------------- Section 12 - 183 ----------------------------------------------

const isEven = (x) => x % 2 === 0;

// ------------------------------------- Section 12 - 184 ----------------------------------------------

console.log(2 ** 53 - 1);
console.log(90071992547409953); // more that 2**53 cause wierd result
console.log(Number.MAX_SAFE_INTEGER);

// Extra info:
    // Smallest "+" number:
        const min = 2 ** -1074;
        console.log(min); // 5e-324

    // Smallest number "-" :
        console.log(Number.MIN_SAFE_INTEGER);

    // Unsafe biggest number:
        console.log(Number.MAX_VALUE);

// ------------------------------------- Section 12 - 186 ----------------------------------------------

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
// console.log(future.getYear()); //Don't use this
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // returns date as timestamp (milliseconds from beginning og Unix time (January 1 1970))
console.log(new Date(2142256980000)); //result is same as our date

console.log(Date.now()); //returns current time as timestamp (based on PC time)

// We have set versions of All methods above (.set...()) to set into our Date (not get)
console.log(future.setFullYear(2040));
console.log(future);

// ------------------------------------- Section 12 - 189 ----------------------------------------------

// Do operation with Date: (with connverting to timestamp underneat, it's doable)
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

console.log(calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14)));
// For really precise calculation, there is a free javascript library called moment.js

// ------------------------------------- Section 12 - 190 ----------------------------------------------

const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long", // Can be 'numeric' as well to display as number (eg. 8) of month OR '2-digit' to display as number with padStart(2,0) (eg. 08).
    year: "numeric", // Can be '2-digit' as well. (like month)
    weekday: "long", // Can be 'short' OR 'narrow'
};

const curDate = new Date();

console.log(new Intl.DateTimeFormat("en-GB", options).format(
    curDate
)); //internationalisation Date, we passed local string into Intl.DateTimeFormat function as language-REGION for first argument AND option Object as second argument to customise output. also we passed the date that we want to format into .format

const local = navigator.language; // To get browser local strting in language-REGION fromat.
console.log(new Intl.DateTimeFormat(local, options).format(
    curDate
));

// Syntax itself:
    // const options = { ... }
    // new Intl.DateTimeFormat("language-REGION"*, configuration options (can be Object) ).format(the date we want to format).  // TIP: *: language-REGION ===calls===> (local string) which comes from ISO language code table (www.lingoes.net), also we can get it from user system via: const local = navigator.language OR any other values in our code.
    
    // NOTE: Whitout Configuration options  it will return only date, but with configuration option we can chamge iit even to display time as well

// ------------------------------------- Section 12 - 191 ----------------------------------------------

// Same as DateTimeFormat
// new Intl.NumberFormat('loocal string').format(number)

const options2 = {
    style: 'unit', // can be 'precent' or 'currency' => currency needs currency property instead of unit property
    unit: 'mile-per-hour', // can br any unit (only when style is unit)
    currncy: 'EUR', // only when style is currency
    useGrouping: false // ca be true (default)
    // More properties on MDN
}