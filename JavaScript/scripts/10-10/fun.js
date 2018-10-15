// Given this function:

// Use the call3Times function to print "Hello, world!" 3 times.
let string = "Hello, world!";

function fun() {
    string = string.split("").reverse().join("");
    console.log(string);
}

function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(fun);

// function fun() {
//   console.log('Hello World');
// }
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// call3Times(fun)