//Category Birds
var birds = ["Eagle", "Penguin", "Parrot", "Flamingo", "Sparrow"];
//Category Foods
var foods = ["Pizza", "Sushi", "Taco", "Pasta", "Burger"];
//Category Country
var countries = ["Canada", "Brazil", "Japan", "France", "Egypt"];
/****************************************** */
//Insert the letter into the letters container
var letterContainer = document.querySelector(".letters");
for (var i = 65; i <= 90; i++) {
  var letter = String.fromCharCode(i);
  var button = document.createElement("button");
  button.textContent = letter;
  button.classList.add("letter-btn");
  button.setAttribute("value", letter.toLowerCase());
  letterContainer.appendChild(button);
}

//Function to return random word
var randomWord = function (category) {
  switch (category) {
    case "birds":
      return birds[Math.floor(Math.random() * 5)];
    case "foods":
      return foods[Math.floor(Math.random() * 5)];
    case "countries":
      return countries[Math.floor(Math.random() * 5)];
  }
};

//Create function to show that game start
var gameStart = function (word) {
  var letters = word.split("");
  var lettersContainer = document.querySelector(".show-letters");
  for (var i = 0; i < letters.length; i++) {
    var spanLetter = document.createElement("span");
    spanLetter.classList.add("btn-style");
    spanLetter.classList.add("hide-letter");
    spanLetter.textContent = letters[i];
    lettersContainer.appendChild(spanLetter);
  }
};

//Show the UI and start the timer functions
var interval;
var number = document.querySelector(".timer-number");
var i = 30;
function startTimer() {
  interval = setInterval(function () {
    number.textContent = i;
    i--;
    var result = document.createElement("div");
    if (i === -1) {
      result.style.color = "red";
      result.textContent = "Sorry you lost!";
      document.querySelector(".result").appendChild(result);
      clearInterval(interval);
      document.querySelectorAll(".letter-btn").forEach(function (btn) {
        btn.removeEventListener("click", startOrReset);
      });
    }
  }, 1000);
}

var showUI = function () {
  document.querySelector(".show-timer").classList.remove("hide-div");
  document.querySelector(".result").classList.remove("hide-div");
  startTimer();
};

//create a function to start the game
var gameStarted = false;
var loseCount = 6;
var lives = document.querySelector(".tries-no");
var startTheGame = function () {
  gameStarted = true;
  var choosenCategory = document.getElementById("cate");
  var returnedWord = randomWord(choosenCategory.value);
  gameStart(returnedWord);
  var foundLetters = 0;
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
      i = 30;
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
  i = 30;
  document.querySelector(".timer-number").textContent = i;
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
