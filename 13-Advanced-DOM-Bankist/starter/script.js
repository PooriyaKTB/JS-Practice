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
// header.append(message)
// header.append(message.cloneNode(true)) // To have prepend and append at same time, so we need to copy the element via cloneNode() and set it to true. so that all the child elements will also be copied.

header.before(message)
header.after(message)