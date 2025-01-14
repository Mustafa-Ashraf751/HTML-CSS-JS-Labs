export function insertLetters() {
  var letterContainer = document.querySelector(".letters");
  for (var i = 65; i <= 90; i++) {
    var letter = String.fromCharCode(i);
    var button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("letter-btn");
    button.setAttribute("value", letter.toLowerCase());
    letterContainer.appendChild(button);
  }
}
