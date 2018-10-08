// Print a NxN square of * characters. Prompt the user for N

// let rows = parseInt(prompt(`How wide?`));
// let columns = parseInt(prompt('How tall?'));
// let z = 0;
// for (let x = 0; x < columns; x++) {
//     // for (let y = 0; y < rows; y++) {
//     //     z += `*`;
//     // };
//     console.log(`*` * rows);
// }

const whoami = `i'm batman`;

const first = whoami.slice(0, 1).toUpperCase();

const rest = whoami.slice(1);

console.log(first + rest);

console.log(`The length of the string is ${whoami.length}`);