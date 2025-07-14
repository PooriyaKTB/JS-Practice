'use strict';
const firstPlayer = document.querySelector('.player--0');
const firstScore = document.getElementById('score--0');
const firstCurrent = document.getElementById('current--0');

const secondPlayer = document.querySelector('.player--1');
const secondScore = document.getElementById('score--1');
const secondCurrent = document.getElementById('current--1');

const imgDice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playerScores, currentScore, activePlayer, isPlaying;

const atStart = function() {
    
  playerScores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  isPlaying = true;
  
  firstCurrent.textContent = 0;
  firstScore.textContent = 0;
  secondCurrent.textContent = 0;
  secondScore.textContent = 0;

  firstPlayer.classList.remove('player--winner');
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--active');

  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  imgDice.classList.add('hidden');
}

atStart();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstPlayer.classList.toggle('player--active');
  secondPlayer.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const rollDice = Math.trunc(Math.random() * 6) + 1;
    imgDice.classList.remove('hidden');
    imgDice.src = `dice-${rollDice}.png`;

    if (rollDice !== 1) {
      currentScore += rollDice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      btnHold.disabled = false;
    } else {
      switchPlayer();
      btnHold.disabled = true;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    if (currentScore && currentScore !== 1) {
      playerScores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = playerScores[activePlayer];
      if (playerScores[activePlayer] >= 100) {
        isPlaying = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
        imgDice.classList.add('hidden');
      } else {
        switchPlayer();
      }
    }
  }
});

btnNew.addEventListener('click', atStart);

/* const rollDice = () => Math.trunc(Math.random() * 6) + 1;

const switchPlayer = function () {
  if (firstPlayer.classList.contains('player--active')) {
    currentScore = 0;
    firstCurrent.textContent = 0;
    firstPlayer.classList.remove('player--active');
    secondPlayer.classList.add('player--active');
  } else {
    currentScore = 0;
    secondCurrent.textContent = 0;
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
  }
};

let currentScore = 0;
const scoreHandeler = function () {
  switch (rollDice()) {
    case 1:
      imgDice.src = './dice-1.png';
      currentScore = 0;
      switchPlayer();
      break;
    case 2:
      imgDice.src = './dice-2.png';
      currentScore += 2;
      break;
    case 3:
      imgDice.src = './dice-3.png';
      currentScore += 3;
      break;
    case 4:
      imgDice.src = './dice-4.png';
      currentScore += 4;
      break;
    case 5:
      imgDice.src = './dice-5.png';
      currentScore += 5;
      break;
    case 6:
      imgDice.src = './dice-6.png';
      currentScore += 6;
      break;
  }
};

const currentPlayer = function () {
  return firstPlayer.classList.contains('player--active') ? true : false;
};

btnRoll.addEventListener('click', function () {
  imgDice.classList.remove('hidden')
  rollDice();
  scoreHandeler();
  currentPlayer()
    ? (firstCurrent.textContent = currentScore)
    : (secondCurrent.textContent = currentScore);
});

const checkWinner = function () {
  if (firstScore.textContent >= 100) {
    firstPlayer.classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else if (secondScore.textContent >= 100) {
    secondPlayer.classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  }
};

btnHold.addEventListener('click', function () {
  if (currentScore) {
    if (currentPlayer()) {
      firstScore.textContent = parseInt(firstScore.textContent) + currentScore;
      switchPlayer();
    } else {
      secondScore.textContent =
        parseInt(secondScore.textContent) + currentScore;
      switchPlayer();
    }
  }
  checkWinner();
});

const newGame = function () {
  btnRoll.disabled = false;
  btnHold.disabled = false;
  firstScore.textContent = 0;
  firstCurrent.textContent = 0;
  secondScore.textContent = 0;
  secondCurrent.textContent = 0;
  imgDice.classList.add('hidden');
  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner');
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--active');
};

btnNew.addEventListener('click', () => newGame());

window.onload = newGame(); */
