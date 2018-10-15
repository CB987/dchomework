// Given an array of array of products:

var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
// Sort the array by price.

let productsByPrice = [];

function priceIt(x) {
  return x.price;
}

productsByPrice = products.map(priceIt).sort();

console.log(productsByPrice);