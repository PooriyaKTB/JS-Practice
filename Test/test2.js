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