// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

let numbers = [];
let posNumbers = [];
for (let i = -5; i <= 5; i++){
    numbers.push(i);
}
console.log(numbers);

function positiveNumbers(x) {
    if (x > 0) {
        posNumbers.push(x);
        // return x;
    }
}

numbers.forEach(positiveNumbers);
console.log(posNumbers);

// numbers.forEach(function(y) {
//     posNumbers.push(positiveNumbers(y))
// })