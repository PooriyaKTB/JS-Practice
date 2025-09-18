'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

// Selecting Elemetns

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections);
const allButtons = document.getElementsByTagName('button');
const allButtons2 = document.getElementsByClassName('btn');
console.log(allButtons);
console.log(allButtons2);

// Creating and Inserting Elements

// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'This is cookie message!';
message.innerHTML =
'This is a cookie message. <button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header')
header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true)) // To have prepend and append at same time, so we need to copy the element via cloneNode() and set it to true. so that all the child elements will also be copied.

header.before(message)
header.after(message) // This position will applied, because element can NOT be in more than one place simultaneously and somehow it will be repositioned

// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', ()=> message.remove()) // old way of removing element: message.parentElement.removeChild(mesaage)

// Styles

message.style.backgroundColor = '#37383d' // SelectElement.Style.AttributeName = 'value'   NOTE: attriibuteName must be writen in camelCase. AND remember in this way Styles gonna set as inline styles.
message.style.width = '120%'

console.log(message.style.color); // Nothing will appear in console
console.log(message.style.width); // The value will appear in console BECAUSE we can only access the style valuee that we set manually ourselve, but can NOT get a style that is hidden inside of a class (sets in CSS)

console.log(getComputedStyle(message).color); // we can get style written in CSS via getComputedStyle(ELEMENT).PROPERTY  NOTE: as name says, it will return computed property value, so even if we did not declare it any whee, it will return the value that already exist and has been set automatically by browser
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px' // We need to parse the Number, because it will return string, but we don't need.

document.documentElement.style.setProperty('--color-primary', 'orangered') // To chage custom properties we use setProperty('the property we want to change', 'the new value we want to set to it')


// Attributes

