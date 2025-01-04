//Question 1
var userInput = prompt("Please enter String");

while (userInput.trim() === "" || !isNaN(userInput)) {
  alert("Please enter a valid String to continue");
  userInput = prompt("Please enter String");
}

function checkPalindrome(name) {
  var arr = name.split("");
  let right = name.length - 1;
  let left = 0;
  while (right > left) {
    if (arr[right] != arr[left]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}

console.log(checkPalindrome(userInput));
