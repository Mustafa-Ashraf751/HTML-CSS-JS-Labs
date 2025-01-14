export function initializeGame(word) {
  var letters = word.split("");
  var lettersContainer = document.querySelector(".show-letters");
  for (var i = 0; i < letters.length; i++) {
    var spanLetter = document.createElement("span");
    spanLetter.classList.add("btn-style");
    spanLetter.classList.add("hide-letter");
    spanLetter.textContent = letters[i];
    lettersContainer.appendChild(spanLetter);
  }
}
