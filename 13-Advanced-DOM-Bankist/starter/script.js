'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollToBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

scrollToBtn.addEventListener('click', () =>
  section1.scrollIntoView({ behavior: 'smooth' })
);

///////////////////////////////////////
/* 
document.querySelectorAll('.nav__link').forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault(); // we have to prevent the default behavior, because what it does is just jump to the part based on href attribute already written in HTML file.
    const ref = this.getAttribute('href') // Can NOT use this.href , becuase we don't need absolute URL.
    document.querySelector(ref).scrollIntoView({behavior: 'smooth'})
  })
); 
*/
// But it is NOT efficient solution above, so that we need to use events delegation. the better solution with event delegation ( which is based on the fact that enevts bubble up) is as below:
//1. Add eventListener tot common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains('nav__link')) {
    // Matching strategy, to ignore unwanted clicks (click somewhere apart from links that we want)
    const targetEl = e.target.getAttribute('href');
    console.log(targetEl);
    document.querySelector(targetEl).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
/* 
// NOTE: remainder of bad practice:
tabs.forEach(t =>
  t.addEventListener('click', e => {
    e.preventDefault();
    console.log('tab');
  })
);
// its bad, iimagine having 200 tabs! then 200 copies of event handler callback function
 */

// here is best practice solution (event deligation):

tabsContainer.addEventListener('click', e => {
  const clickedBadWay = e.target;
  //console.log(clickedBadWay)  as it's obviouse, the button has span inside, so if user click on span nothing happen. to solve it:
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return; // Guard clause

  // Remove active classes (for tabs and contents)
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', e => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el)=> {
      if (el !== link)el.style.opacity = 0.5
    })
    logo.style.opacity = 0.5
  }
});
nav.addEventListener('mouseout', e => {
  const sibling = e.target.closest('nav').querySelectorAll('.nav__link')
  sibling.forEach((el)=>el.style.opacity = 1)
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
/* 
// Selecting Elemetns

console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section'); // It will return a node list, which contains all of the elements that are in a section
console.log(allSections);
document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button'); // It return HTML collection, NOT node list. (if DOM changes (even programmatically), the collection will automatically update immediately)
const allButtons2 = document.getElementsByClassName('btn'); // It return HTML collection, NOT node list. (if DOM changes (even programmatically), the collection will automatically update immediately)
console.log(allButtons);
console.log(allButtons2);

// Creating and Inserting Elements

// .insertAdjacentHTML
const message = document.createElement('div'); // Create a DOM element, store it into a variable, BUT the element is NOT yet anywhere in DOM. So we need to manually insert it into the page.
message.classList.add('cookie-message');
message.textContent = 'This is cookie message!';
message.innerHTML =
  'This is a cookie message. <button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');
header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true)) // To have prepend and append at same time, so we need to copy the element via cloneNode() and set it to true. so that all the child elements will also be copied.

header.before(message);
header.after(message); // This position will applied, because element can NOT be in more than one place simultaneously and somehow it will be repositioned

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove()); // old way of removing element: message.parentElement.removeChild(mesaage)

// Styles
message.style.backgroundColor = '#37383d'; // SelectElement.Style.AttributeName = 'value'   NOTE: attributeName must be writen in camelCase. AND remember in this way Styles gonna set as inline styles.
message.style.width = '120%';

console.log(message.style.color); // Nothing will appear in console
console.log(message.style.width); // The value will appear in console BECAUSE we can only access the style value that we set manually ourselve, but can NOT get a style that is hidden inside of a class (sets in CSS)

console.log(getComputedStyle(message).color); // we can get style written in CSS via getComputedStyle(ELEMENT).PROPERTY  NOTE: as name says, it will return computed (by browser) property value, so even if we did not declare it anywhere, it will return the value that already exist and has been set automatically by browser
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // We need to parse the Number, because it (getComputedStyle(message).height) will return string, but we don't need.

document.documentElement.style.setProperty('--color-primary', 'orangered'); // To change custom properties we use setProperty('the property we want to change', 'the new value we want to set to it')

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Will return absolute URL
console.log(logo.className);

logo.alt = 'Beautifull minimalist logo';

console.log(logo.designer); // As its not standard attribute, it will be undefined
console.log(logo.getAttribute('designer')); // But we can access it this way

logo.setAttribute('company', 'Bankist'); // Set new attribute to a property via setAttribute('attribute name', 'value')

console.log(logo.src); // Will return absolute URL
console.log(logo.getAttribute('src')); // Will return relative URL (exactly same as exist in HTML file)
// These two (.src & .getAttribute()) work same (as src) for href as well:
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber); // NOTE we write everything comes after data- exactly the same BUT in camelCase. NOTE: data is special attribute, and must start with 'data-' in HTML

// Classes
logo.classList.add('first', 'second', 'if-more'); // argument can be only one or more
logo.classList.remove('first', 'second', 'if-more'); // argument can be only one or more
logo.classList.toggle('first');
logo.classList.contains('first');

// DONT USE
logo.className = 'Pooriya'; // Because it will overwrite all the existing classes
 */

// ----- Handeling Events -----
// ----- firest way -----
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter' , () => alert(`you are welcome`))

// ----- other way -----
// h1.mouseenter = function(){
//   alert (`you are welcome`)
// }

// ----- other way -----
// const h1alert = function () {
//   alert(`you are welcome`);

//   h1.removeEventListener('mouseenter', h1alert);
// };

// h1.addEventListener('mouseenter', h1alert)

// ----- other way -----
// const h1alert = function () {
//   alert(`you are welcome`);
// };

// h1.addEventListener('mouseenter', h1alert);

// setTimeout(() => h1.removeEventListener('mouseenter', h1alert), 3000);

// ------------------------------------- Section 13 - 205 ----------------------------------------------

/* 
const h1 = document.querySelector('h1');

// Going downward: child
console.log('what we Can select:');
console.log(document.querySelector('h1'));
console.log('--------------------------');
console.log(h1.querySelectorAll('.highlight')); // note that querySelector works on elements as well, not only document.
console.log(h1.childNodes); // not much used
console.log(h1.children); // return HTML collection of ONLY direct children
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upward: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header'));
console.log(h1.closest('h1')); // gonna be the element itself
// h1.closest('.header').style.background = 'var(--gradient-secondary)'

// Going upward: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//in case of reading all siblings, we can use a trick: going up to parent element and then read all children
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if (el !== h1) el.style.transform = 'scale(0.5)'
})
 */

// ------------------------------------- Section 13 - 206 ----------------------------------------------
