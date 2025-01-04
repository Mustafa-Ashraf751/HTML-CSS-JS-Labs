var arr = [
  "Avengers end the game",
  "Lord of the rings series",
  "Batman the dark knight",
  "The hobbit series",
  "The dune",
];

var arr2 = arr;

arr[2] = "The expendables";

console.log(arr[arr.length - 1]);

console.log(arr.slice(-1)[0]);
//Pop will remove the last element from the arrayList
console.log(arr.pop());
arr.unshift("The Shawshank Redemption");
console.log(arr);
//point to the same location in the heap like java
console.log(arr2[2]);
