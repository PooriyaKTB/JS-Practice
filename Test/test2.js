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
