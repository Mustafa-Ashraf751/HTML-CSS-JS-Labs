export function returnRandomWord(category) {
  //Category Birds
  var birds = ["Eagle", "Penguin", "Parrot", "Flamingo", "Sparrow"];
  //Category Foods
  var foods = ["Pizza", "Sushi", "Taco", "Pasta", "Burger"];
  //Category Country
  var countries = ["Canada", "Brazil", "Japan", "France", "Egypt"];
  switch (category) {
    case "birds":
      return birds[Math.floor(Math.random() * 5)];
    case "foods":
      return foods[Math.floor(Math.random() * 5)];
    case "countries":
      return countries[Math.floor(Math.random() * 5)];
  }
}
