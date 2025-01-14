export var interval = null;
export function startTimer(removeListener) {
  var number = document.querySelector(".timer-number");
  if (interval) {
    clearInterval(interval);
  }
  let i = 30;
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
        btn.removeEventListener("click", removeListener);
      });
    }
  }, 1000);
}

export function showUI() {
  document.querySelector(".show-timer").classList.remove("hide-div");
  document.querySelector(".result").classList.remove("hide-div");
  startTimer();
}

export function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}
