var price = prompt("Please enter the price");

var discount = prompt("Please enter the discount");

while (isNaN(price) || isNaN(discount)) {
  price = prompt("Please enter the price");
  discount = prompt("Please enter the discount");
}

function newPrice(p, d) {
  return price - discount;
}

console.log(newPrice(price, discount));
