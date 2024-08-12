'use strict';

//declaring variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//refactoring
const qsNumber = document.querySelector('.number');
const qsBody = document.querySelector('body');
const qsHighscore = document.querySelector('.highscore');

//refactoring as functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//saving score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('no number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    qsNumber.textContent = secretNumber;
    qsNumber.style.width = '30rem';
    qsBody.style.backgroundColor = 'green';

    //checks highscore
    if (score > highscore) {
      highscore = score;
      qsHighscore.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      //guess higher or lower then secretnumber?
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  //score reset
  score = 20;
  displayScore(score);

  //secret number reset
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //message reset
  displayMessage('Start guessing...');

  //input field reset
  document.querySelector('.guess').value = ' ';

  //background reset
  qsBody.style.backgroundColor = '#222';

  //number reset
  qsNumber.textContent = '?';
  qsNumber.style.width = '15rem';
});
