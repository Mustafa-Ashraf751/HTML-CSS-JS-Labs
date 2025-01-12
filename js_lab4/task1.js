Array.prototype.getAverage = function () {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    if (isNaN(this[i]))
      throw new Error("You can get the average for numbers only!");
    sum += this[i];
  }
  var rounded = (sum / this.length).toFixed(2);
  return rounded;
};

var arr = [15, 20, 30];
var names = ["Ali", "Mustafa"];

console.log(arr.getAverage());
console.log(names.getAverage());
