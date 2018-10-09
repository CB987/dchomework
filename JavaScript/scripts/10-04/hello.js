// JavaScript comment 
console.log("Hello");

//Getting input

//using var and camelCase
// var promptText = "What is your name?"
// var userName = prompt(promptText);

//uses string interpolation
// var greeting = "Hello, " + userName + "!";
// console.log(greeting);

// ========= preferred syntax: let and const
// rule of thumb: use const until you get an error
       const promptText = "What is your name?"
// const userName = prompt(promptText);
      let userName = prompt(promptText);
// userName = userName + " is a bozo"
// const greeting = "Hello, " + userName + "!";
//string interpolation aka "template literals"
// 1. replace quotes with backticks
// 2. remove the + signs
// 3. wrap your variables in ${} ("curlycash")
       userName = `${userName} is a bozo!`;
       const greeting = `Hello, ${userName}!`;
       console.log(greeting);

