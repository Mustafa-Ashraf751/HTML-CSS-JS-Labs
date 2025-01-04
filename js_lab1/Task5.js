var userName = prompt("Please enter your name ?");

//Validate the input from the user
while (userName.trim() === "" || !isNaN(userName)) {
  alert("Invalid input please try again");
  userName = prompt("Please enter your name ?");
}

var flag = true;
while (flag) {
  flag = false;
  var userGrades = prompt("Please enter the grades in format num1,num2");
  var gradesArr = userGrades.trim().split(",");
  for (let i = 0; i < gradesArr.length; i++) {
    if (isNaN(gradesArr[i])) {
      alert("Invalid input please try again");
      flag = true;
      break;
    }
  }
}

console.log(`Welcome ${userName}`);
console.table(userGrades.split(","));
var total = userGrades
  .split(",")
  .map(Number)
  .reduce((acc, current) => {
    return acc + current;
  }, 0);
console.log(total / userGrades.split(",").length);
