"use strict";
//----------------------Exercise S44---------------------

/*const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    friends : ["Michael", "Peter", "Steven"],
    job : 'teacher',
    location : "Portugal",
    twitter : "@jonasschmedtman",
    birthYear : 1991,
    drivingLicense : false,
    calcAge : function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function() {
        this.summary = `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.friends.length} friends, also he has ${this.drivingLicense ? 'a' : 'No'} driving license.`
    },

    
}

console.log(jonas.calcAge())
console.log(jonas.age)
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

jonas.getSummary()
console.log(jonas.summary)*/

//----------------------Exercise L61-1---------------------

/*
const tempratures = [3, -2,-6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempAmplitude = function (arr) {
let maxTemp = arr[0];
let minTemp = arr[0];

  for (let i of arr) {
    if (typeof i !== "number") continue;
    if (i > maxTemp) maxTemp = i;
    if (i < minTemp) minTemp = i;
  }
  return maxTemp - minTemp;
};

console.log(tempAmplitude(tempratures));
*/

//----------------------Exercise L61-2---------------------

/*
const tempratures = [3, -2,-6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempratures2 = [3, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempAmplitude = function (arr1, arr2) {
const allTemp = arr1.concat(arr2);
let maxTemp = allTemp[0];
let minTemp = allTemp[0];

  for (let i of allTemp) {
    if (typeof i !== "number") continue;
    if (i > maxTemp) maxTemp = i;
    if (i < minTemp) minTemp = i;
  }
  return maxTemp - minTemp;
};

console.log(tempAmplitude(tempratures, tempratures2));
*/

//----------------------Exercise L64-1---------------------
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let resultData = "...";
  for (let i in arr) {
    resultData += ` ${arr[i]}\u00B0C in ${Number(i) + 1} days ...`;
  }
  return console.log(resultData);
};
printForecast(data2);
*/
//----------------------Exercise L66-1---------------------

/* 
const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const weekSum = function (arr) {
  const weekTrack = {
    totalHours: 0,
    dailyAvg: 0,
    mostWorked: 0,
    workedDays: 0,
    wasFullTime: false
  };
  for (let i in arr) {
    weekTrack.totalHours += arr[i];
    if (arr[i] > weekTrack.mostWorked) weekTrack.mostWorked = i;
    if (arr[i] !== 0) weekTrack.workedDays++;
  }
  weekTrack.dailyAvg = Math.round(weekTrack.totalHours / 7);
  weekTrack.wasFullTime = weekTrack.totalHours >= 35 ? true : false;

  switch (weekTrack.mostWorked){
    case '0': weekTrack.mostWorked = "Monday" 
    break;
    case '1': weekTrack.mostWorked = "Tuesday"
    break;
    case '2': weekTrack.mostWorked = "Wednesday"
    break;
    case '3': weekTrack.mostWorked = "Thursday"
    break;
    case '4': weekTrack.mostWorked = "Friday"
    break;
    case '5': weekTrack.mostWorked = "Saturday"
    break;
    case '6': weekTrack.mostWorked = "Sunday"
    break;
  }

  return weekTrack;
};

console.table(weekSum(data));
 */

// ----------------------Assignments - Destructuring Arrays ---------------------

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/* 
const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
// console.log(thirdBook);

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating,ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] =
  ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// const [{title, author, ISBN}] = books

// 2.1

const {title, author, ISBN} = books[0]
// console.log(title, author, ISBN);

const {keywords: tags} = books[0]
// console.log(tags);

const {language, programmingLanguage='unknown'} = books[6]
// console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor} = books[0])
// console.log(bookTitle,bookAuthor);

const {thirdParty: {goodreads: {rating:bookRaing}}} = books[0]
// console.log(bookRaing);

const printBookInfo = function ({title,author,year= 'year unknown'}) {
  console.log(`${title} by ${author}, ${year}`);
}
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// 3.1

const bookAuthors = [...books[0].author, ...books[1].author]
// console.log(bookAuthors);

const spellWord = (word) => console.log(...word);
// spellWord('JavaScript')

const [mainKeyword, ...rest] = books[0].keywords
// console.log(mainKeyword, rest);


*/
// --------------

/*
 const rest1 = {
  name: 'capri',
  numGuests:null,
}
const rest2 = {
  name:'La Piazza',
  owner: 'Giovani Rossi'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ??= 10
rest2.numGuests ??= 10

rest1.owner ||= 'anonymos'
rest2.owner ||= 'anonymos'

console.log(rest1);
console.log(rest2); 
*/
// --------------

// for (let i of books) {
//   if (i.thirdParty.goodreads.rating < 4.2) i.highlighted &&= false
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books[7]);
// --------------
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const playerNames = game.scored.entries();
// for (const [i, playName] of playerNames) console.log(`Goal ${i +1}: ${playName}`);

// for (const [i, playName] of game.scored.entries()) console.log(`Goal ${i +1}: ${playName}`);

const scorers2 = {};
for (const i of game.scored) {
  scorers2[i] ? scorers2[i]++ : (scorers2[i] = 1);
}
// console.log(scorers2);

// for (const [el , nameP] of Object.entries(game.scored)) console.log(`Goal ${Number(el)+1}: ${nameP}`);
// for (const [goalInd, playerName] of game.scored.entries() ) console.log(`Goal ${goalInd+1}: ${playerName}`);

let total = 0;
for (const i of Object.values(game.odds)) total += i;
total /= Object.keys(game.odds).length;
// console.log(total);

for (const [teamName, oddOfWin] of Object.entries(game.odds)) {
  const msg = teamName === "x" ? "Draw" : game[teamName];
  // console.log(`Odd of victory ${msg} ${oddOfWin}`)
}

// -------1-------
const {
  players: [players1, players2],
} = game;

// const [players1, players2] = game.players;

// -------2-------

const [gk, ...fieldPlayers] = players1;

// -------3-------

const allPlayers = [...players1, ...players2];

// -------4-------

const players1Final = [...players1, "Thiago", "Coutinho", "Prisic"];

// -------5-------

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(`team-1 is ${team1} and draw is ${draw} then team-2 is ${team2}`);

// ------6--------

const printGoals = function (...player) {
  // console.log(`${player} scored ${player.length}`);
};
// printGoals(...game.scored)

// -------7-------

// team1 < team2 && console.log('team1');
// team1 > team2 && console.log('team2');
// team1 > team2 ? team1 is winner : team2 is winner

// -------8-------
// for (let [i,el] of game.scored.entries()) {
//   console.log(`Goal ${i+1} : ${el}`);
// }

// -------9-------
/* for (let i of game.odds){
  console.log(game.odds.key);
} */

const namess = new Set(["pooriya", "ali", "sara", "pooriya"]);
// console.log(...namess);

namess.add("mamad");
// console.log(namess);

/* const mapp = new Map([
  ["names", ["pooriya", "mamad"]],
  ["age", 30],
  ["job", "developer"],
]);
console.log(mapp.get("names"));
// mapp.set('names', 'ali');
// console.log(mapp.get('names'));
// console.log(mapp.size);
for (const keys of mapp.entries()) console.log(...keys);
console.log("-------------------");
for (const keys of mapp) {
  // console.log(keys);
}
 */
/* 
console.log(mapp.delete('job'));
console.log(mapp)
 */

const quiz = new Map([
  ["Question", "What is the best programming language?"],
  [1, "Java"],
  [2, "C"],
  [3, "JavaScript"],
  ["Answer", 3],
  [true, "Correct!"],
  [false, "Try Again!"],
]);

/* console.log(quiz.get('Question'));
for (const [key, value] of quiz) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Your answer: ', (userAnswer) => {
  const answer = Number(userAnswer);
  console.log(answer === quiz.get('Answer'));
  readline.close();})
 */

const MarkMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI(mass, height) {
    return this.mass / (this.height * this.height);
  },
};
const JohnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI(mass, height) {
    return this.mass / (this.height * this.height);
  },
};

const markBMI = MarkMiller.calcBMI();
const johnBMI = JohnSmith.calcBMI();
// console.log(markBMI)
// console.log(johnBMI)
// console.log(markBMI > johnBMI ? `${MarkMiller.fullName} BMI (${markBMI}) is higher than ${JohnSmith}'s (${johnBMI}).` : `${JohnSmith.fullName} BMI (${johnBMI}) is higher than ${MarkMiller}'s (${markBMI}).`);

/* 
const myName = 'Pooriya'
console.log(myName.split("").join(" * "));
console.log(myName.slice(-3));
 */
/* 
function camelCase(input) {
  const normalised = input.toLowerCase().trim().replace("_", " ").split(" ");
  const upper = normalised[1][0].toUpperCase();
  const result = upper.join('')
  console.log(result);
}

camelCase("under_score");
camelCase("first_name");
camelCase("some_Variable");
camelCase("calculate_AGE");
camelCase("delayed_depature");
 */

// -------------------------------------- Section 10 --------------------------------------------------

// -------------------------------------- Section 11 --------------------------------------------------
/* 
// Data 1:
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
// Data 2:
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

function checkDogs(julia, kate) {
  const correctJulia = julia.slice();
  correctJulia.splice(0, 1);
  correctJulia.splice(-2);
  //OR
  // const correctJulia = julia.slice(1,-2);
  
  const allDogs = correctJulia.concat(kate);
  
  allDogs.forEach((dogAge, i) =>
    dogAge >= 3
  ? console.log(
    `Dog number ${i + 1} is an adult, and is ${dogAge} years old.`
    )
    : console.log(`Dog number ${i + 1} is stil a puupy.`)
    );
    }
    checkDogs(julia, kate);
    console.log("----------------------------------");
    checkDogs(julia2, kate2);
    */

// ------------------------------------- Section 11 - 157 ----------------------------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* 
const rate = 1.1;
const mov = movements.map((move) => move * rate);
console.log(mov);

const strMov = movements.map((mov, i, arr) => 
  
  // mov > 0
  //   ? `Movment ${i + 1}: You diposited ${mov}`
  //   : `Movment ${i + 1}: You withdrew ${Math.abs(mov)}`
  
  `Movment ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  );
  console.log(strMov);
  */

// ------------------------------------- Section 11 - 159 ----------------------------------------------
/* 
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
 */
// ------------------------------------- Section 11 - 160 ----------------------------------------------

const globalBalance = movements.reduce((bal, mov) => bal + mov, 0);
console.log(globalBalance);
