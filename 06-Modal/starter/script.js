'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i of showModal) i.addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
