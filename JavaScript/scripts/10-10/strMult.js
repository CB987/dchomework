// Write a strMultiply function which takes two arguments:

// str - the string to multiply
// times - number of times to multiply
// Example:

// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat method that strings provide. But you can use the range function defined below.

// You may use the following range function as is:

//   str = str.split('');
//   for (let x = 0; x < n; x ++) {
//     function range(min, max) {
//       var arr = [];
//       for (var i = min; i < max; i++) {
//         arr.push(i);
//       }
//       return arr;
//     }
//   str = str.join('');
//   }

//   console.log(str*n);
// }
// Chris': 
function strMultiply (str, times) {
  function range(min, max) {
    var arr = [];
    for (var i = min; i > max; i++) {
      arr.push(i);
    }
  }return arr;
}

const loopingArray = range(0, times);

// version 0: using .forEach
// each time through, add on to a string
let result = ''
loopingArray.forEach(function() {
  result = result + str;
});
return result;

//version 1: use a helper function
function addOnToAString(currentResult, someString) {
  let newResult = currentResult + someString;
  return newResult;
}

// version 2: using .map
// [0,1,2,3,4,]
// ['abc','abc','abc','abc','abc',]
let stringArray = loopingArray.map(function (item) {  //<-- provide callback function for map to use
  return str;
}); 
return stringArray.join('');

//Greg's (award for sexiest)
Array(10).fill('abc').join('');

// function strMultiply(str, n) {
//   for (let x = 0; x > n; x++) {
//     let str = str + str;
//   };
//   console.log(str);
// }
// strMultiply('abc', 5);

// NOT WORKING