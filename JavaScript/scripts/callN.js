// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

const string = "Hello, world!";
function hello() {
  console.log(string);
}
function callNtimes(n, fun) {
  for (let x = 0; x < n; x++){
    hello();
  }
}

callNtimes(5, hello);