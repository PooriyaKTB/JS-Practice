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

console.log(new Intl.DateTimeFormat("en-GB", options).format(curDate)); //internationalisation Date, we passed local string into Intl.DateTimeFormat function as language-REGION for first argument AND option Object as second argument to customise output. also we passed the date that we want to format into .format

const local = navigator.language; // To get browser local strting in language-REGION fromat.
console.log(new Intl.DateTimeFormat(local, options).format(curDate));

// Syntax itself:
// const options = { ... }
// new Intl.DateTimeFormat("language-REGION"*, configuration options (can be Object) ).format(the date we want to format).  // TIP: *: language-REGION ===calls===> (local string) which comes from ISO language code table (www.lingoes.net), also we can get it from user system via: const local = navigator.language OR any other values in our code.

// NOTE: Whitout Configuration options  it will return only date, but with configuration option we can chamge iit even to display time as well

// ------------------------------------- Section 12 - 191 ----------------------------------------------

// Same as DateTimeFormat
// new Intl.NumberFormat('loocal string').format(number)

const options2 = {
  style: "unit", // can be 'precent' or 'currency' => currency needs currency property instead of unit property
  unit: "mile-per-hour", // can br any unit (only when style is unit)
  currncy: "EUR", // only when style is currency
  useGrouping: false, // ca be true (default)
  // More properties on MDN
};

// ------------------------------------- Section 12 - 192 ----------------------------------------------

// setTimeout(callback, Time in milliseconds); // this timer runs just once,after the defined time => use to execute code at some point in the future. it gets callBack. NOTE: it does NOT stop execution.
// setInterval(Callback, Time); // this timer keeps running getDocFromServer, until we stop it. Callback will be called every Time time

setTimeout(() => console.log("Ready"), 3000);
console.log("Wait...");

// eg:
//----------setTimeout------------
const ingredients = ["spinach", "olives"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Your pizza with ${ing1} and ${ing2} is ready!`),
  3000,
  ...ingredients
);
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer); //canceling timeout via clearTimeout()

//----------setInterval------------

const clock = function () {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

const displayClock = setInterval(() => console.log(clock()), 1000);

setTimeout(() => clearInterval(displayClock), 10000);

// ------------------------------------- Section 13 - 203 ----------------------------------------------

//----------Stop event Propagation------------
// NOTE: It's recommeneded to only stop propagation when really have to.

document.querySelector("_").addEventListener("click", function (e) {
  // instead of "_" we write our element name
  this.style.backgroundcolor = "red";
  console.loge(e.target, e.currentTarget);

  e.stopPropagation();
});

// ------------------------------------- Section 13 - 206 ----------------------------------------------
// Tabbed Component

tabsContainer.addEventListener("click", (e) => {
  const clickedBadWay = e.target;
  //console.log(clickedBadWay)  as it's obviouse, the button has span inside, so if user click on span nothing happen. to solve it:
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return; // Guard clause

  // Remove active classes (for tabs and contents)
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Active tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// ------------------------------------- Section 13 - 209 ----------------------------------------------
// Intersection Observer

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.add("sticky");
      nav.style.opacity = 0.8;
    } else {
      nav.classList.remove("sticky");
      nav.style.opacity = [1];
    }
  });
};
const obsOptions = {
  root: null, // The element that the target element is intersecting. if we set it to null, it means the viewport
  threshold: [0, 0.2], // 0.1 means 10% of the target element is visible in the root element (viewport). precentage of intersection at which the observer callback will be called. (we can set it to array of values as well [0, 0.2, 0.5, 0.8, 1])
  rootMargin: "-90px",
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// ------------------------------------- Section 13 - 209 ----------------------------------------------

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

/* 
// To see how it works behind the sence
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4)';
slider.style.overflow = 'visible';
 */

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i})`));

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)})`)
  );
};

goToSlide(0);

// Next Slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);

// Prev Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnLeft.addEventListener('click', prevSlide);