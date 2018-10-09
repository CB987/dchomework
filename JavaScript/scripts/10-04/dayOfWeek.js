// start with a hard-coded value 
// until you know your program works, then
// switch to prompting the user

const theDay = prompt("Day (O-6)?")
// const theDay = 0;
let dayName = `invalid`;

// must use parenthese for your conditions!!!
// 'loose' equality is ==
// 'strict' equality is === by default, use 'threequals'
if (theDay === 0) {  //and curly braces
    dayName = `Sunday`;
} else if (theDay === 1) {
    dayName = 'Monday';
} else if (theDay === 2) {
    dayName = 'Tuesday'; 
} else if (theDay === 3) {
    dayName = 'Wednesday'; 
} else if (theDay === 4) {
    dayName = 'Thursday';
} else if (theDay === 5) {
    dayName = `Friday`;
} else if (theDay === 6) {
    dayName = `Saturday`;
}
//you can leave off curly braces, but your "body" can only have one statement
// any statement after the first will get run 
// regardless of whether the condition is true or not

// The body of an if statement is surrounded by curly braces
// and does not require a semi-colon after the curly braces
console.log(dayName);