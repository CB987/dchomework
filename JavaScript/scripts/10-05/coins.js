// Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program
let coins = 0;
let more = `yes`; // prompt(`You have ${coins} coins. Do you want a coin? yes or no`);
while (more === `yes`) {
    more = prompt(`Do you want another? yes or no`);
    coins++;
    console.log(`You have ${coins} coins.`);
} 
console.log(`Byeeeeeeee`);



// let user = `yes`
// let coins = 0

// while (user === `yes`) {
//     user = prompt(`Want another?`);
//         coins++;
//         // debugger;
//         console.log(`You have ${coins} coins.`)
// }
// console.log(`Bye Felicia`)