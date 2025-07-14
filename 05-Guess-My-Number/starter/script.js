'use strict';
/* const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const displayNumber = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const msg = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let score = 20;
let goalNumber;

function numberProducer() {
  // goalNumber = Math.floor(Math.random() * 20) + 1;
  goalNumber = Math.trunc(Math.random() * 20) + 1;
}

function scoreHandeler() {
  if (score > 1) {
    score--;
  } else {
    score = 0;
    msg.textContent = 'You Lose!';
    checkBtn.disabled = true;
  }
}

function checker() {
  if (!guessNumber.value) {
    msg.textContent = 'No Number!!!';
  } else if (Number(guessNumber.value) > goalNumber) {
    msg.textContent = 'Too High';
    scoreHandeler();
    scoreEl.textContent = score;
  } else if (Number(guessNumber.value) < goalNumber) {
    msg.textContent = 'Too Low';
    scoreHandeler();
    scoreEl.textContent = score;
  } else {
    displayNumber.textContent = Number(guessNumber.value);
    msg.textContent = 'You Got it 👍🏻';
    score > highScore.textContent ? (highScore.textContent = score) : highScore;
    score = 20;
    checkBtn.disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber.style.width = '30rem';
  }
}

function resetAll() {
  numberProducer();
  msg.textContent = 'Start guessing...';
  score = scoreEl.textContent = 20;
  guessNumber.value = '';
  displayNumber.textContent = '?';
  checkBtn.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber.style.width = '15rem';
}

checkBtn.addEventListener('click', () => checker());
// checkBtn.addEventListener('click', () => console.log(goalNumber));
againBtn.addEventListener('click', () => resetAll());

window.onload = () => numberProducer();*/


'use strict';
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const displayNumber = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const msg = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let score = 20;
let goalNumber;

function numberProducer() {
  // goalNumber = Math.floor(Math.random() * 20) + 1;
  goalNumber = Math.trunc(Math.random() * 20) + 1;
}

function scoreHandeler() {
  if (score > 1) {
    score--;
  } else {
    score = 0;
    msgDisplay('You Lose!');
    checkBtn.disabled = true;
  }
}

function msgDisplay (message) {
  msg.textContent = message
}

function checker() {
  let guess = Number(guessNumber.value)
  if (!guess) {
    msgDisplay('No Number!!!');
  } else if (guess < 1 || guess > 20 || guess == 0) {
    msgDisplay('Must choose between 1 and 20');
  } else if (guess !== goalNumber) {
    guess > goalNumber ? msgDisplay('Too High') : msgDisplay('Too Low');
    scoreHandeler();
    scoreEl.textContent = score;
  } else {
    displayNumber.textContent = guess;
    msgDisplay('You Got it 👍🏻');
    score > highScore.textContent ? (highScore.textContent = score) : highScore;
    checkBtn.disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber.style.width = '30rem';
  }
}

function resetAll() {
  numberProducer();
  msgDisplay('Start guessing...');
  score = scoreEl.textContent = 20;
  guessNumber.value = '';
  displayNumber.textContent = '?';
  checkBtn.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber.style.width = '15rem';
}

checkBtn.addEventListener('click', () => checker());
// checkBtn.addEventListener('click', () => console.log(goalNumber));
againBtn.addEventListener('click', () => resetAll());

window.onload = () => numberProducer();
