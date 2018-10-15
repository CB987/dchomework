// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].


let numbers = [];
let squares = [];
for (let i = -5; i <= 5; i++){
    numbers.push(i);
}
// console.log(numbers);

// function positiveNumbers(x) {
//     if (x > 0) {
//         posNumbers.push(x);
//     } 
// }

function square(x) {
    x = x * x;
    squares.push(x);
    }

numbers.forEach(square);
console.log(squares);