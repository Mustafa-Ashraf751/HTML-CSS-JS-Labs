/*********************** Program 1 */
var input1 = prompt("Please enter number to continue");

while (input1.trim() === "" || isNaN(input1)) {
  alert("Invalid number please try again!");
  input1 = prompt("Please enter number to continue");
}

function sumOfDigits(number) {
  return number
    .toString()
    .split("")
    .map(Number)
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
}

console.log(sumOfDigits(input1));
/*********************** Program 2 */
var input2 = prompt("Please enter string to continue");

while (input2.trim() === "" || !isNaN(input2)) {
  alert("Invalid string please try again!");
  input2 = prompt("Please enter string to continue");
}

var vowels = {
  a: 0,
  i: 0,
  o: 0,
  u: 0,
  e: 0,
};

function checkVowels(string) {
  for (var i = 0; i < string.split("").length; i++) {
    Object.keys(vowels).forEach(function (el) {
      if (el === string.split("")[i]) vowels[el]++;
    });
  }
  return vowels;
}

console.log(checkVowels(input2));

/*********************** Program 3 */
var input3 = prompt("Please enter string to continue");
var input4 = prompt("Please enter char to search");

while (input3.trim() === "" || !isNaN(input3)) {
  alert("Invalid string please try again!");
  input3 = prompt("Please enter string to continue");
}
while (input4.trim() === "" || !isNaN(input4) || input4.length != 1) {
  alert("Invalid character please try again!");
  input4 = prompt("Please enter char to continue");
}

function checkChar(string, char) {
  var count = 0;
  string.split("").forEach(function (element) {
    if (element === char) count++;
  });
  return count;
}

console.log(checkChar(input3, input4));

var birthDate = prompt("Please enter your birth Date in format xx-xx-xxxx");

var birthDateArr = birthDate.split("");

while (
  isNaN(birthDateArr[0]) ||
  isNaN(birthDateArr[1]) ||
  isNaN(birthDateArr[2])
) {
  alert("Invalid input please try again");
  birthDate = prompt("Please enter your birth Date in format xx-xx-xxxx");
}

function calcBirthDate(dob) {
  var date = new Date();
  var userDate = new Date(dob);
  date = Math.floor((date - userDate) / (1000 * 60 * 60 * 24 * 365));
  return date;
}

console.log(calcBirthDate(birthDate));
