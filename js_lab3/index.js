/****************************************** */
//Insert the letter into the letters container

import { insertLetters } from "./insertLetters.js";

insertLetters();

//Create function to return random words
import { returnRandomWord } from "./returnRandom.js";

//Create function to initialize the game and hide the letters
import { initializeGame } from "./initializeGame.js";

//Show the UI and start the timer functions
import { interval, startTimer, stopTimer, showUI } from "./startTimerShowUI.js";

//create a function to start the game
var gameStarted = false;
var loseCount = 6;
var lives = document.querySelector(".tries-no");
var startTheGame = function () {
  var foundLetters = 0;
  gameStarted = true;

  var choosenCategory = document.getElementById("cate");

  var returnedWord = returnRandomWord(choosenCategory.value);

  initializeGame(returnedWord);

  function listener(event) {
    var userChoice = event.target.getAttribute("value");
    event.target.disabled = true;
    var arr = returnedWord
      .split("")
      .map(function (l, i) {
        return [l, i];
      })
      .filter(function (element) {
        return element[0].toLowerCase() === userChoice;
      });
    if (arr.length == 0) loseCount--;
    arr.forEach(function (element) {
      var lettersContainer = document.querySelector(".show-letters");
      foundLetters++;
      clearInterval(interval);
      startTimer();
      lettersContainer
        .querySelector(`:nth-child(${element[1] + 1})`)
        .classList.remove("hide-letter");
    });

    lives.textContent = loseCount;
    var result = document.createElement("div");
    result.classList.add("result-div");
    if (loseCount === 0) {
      result.style.color = "red";
      result.textContent = "Sorry you lost!";
      document.querySelector(".result").appendChild(result);
      clearInterval(interval);
      document.querySelectorAll(".letter-btn").forEach(function (btn) {
        btn.removeEventListener("click", listener);
      });
    } else if (foundLetters === returnedWord.length) {
      result.style.color = "green";
      result.textContent = "You win the game";
      document.querySelector(".result").appendChild(result);
      clearInterval(interval);
      document.querySelectorAll(".letter-btn").forEach(function (btn) {
        btn.removeEventListener("click", listener);
      });
    }
  }
  showUI();
  document.querySelectorAll(".letter-btn").forEach(function (btn) {
    btn.addEventListener("click", listener);
  });
};

//function to reset everyThing
var reset = function () {
  //Remove the old word
  var spans = document.querySelectorAll(".btn-style");
  spans.forEach(function (span) {
    span.remove();
  });

  //reset Time
  clearInterval(interval);
  stopTimer();
  document.querySelector(".timer-number").textContent = 30;

  //reset lives
  loseCount = 6;
  document.querySelector(".tries-no").textContent = 6;
  gameStarted = false;
  document.querySelectorAll(".letter-btn").forEach(function (btn) {
    btn.removeAttribute("disabled");
    btn.removeEventListener("click", startOrReset);
  });

  //remove the paragraph of the result
  document.querySelector(".result-div").remove();
};

var startOrReset = function () {
  if (!gameStarted) {
    startTheGame();
  } else {
    reset();
  }
};

//When user press the start btn every thing start
var startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startOrReset);
