var sentence = prompt("Please enter a sentence to check it");

while (sentence.trim === "" || !isNaN(sentence)) {
  sentence = prompt("Please enter a sentence to check it");
}

function getLongest(s) {
  var arr = s.split(" ");
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      maxIndex = i;
    }
  }
  return arr[maxIndex];
}

console.log(getLongest(sentence));
