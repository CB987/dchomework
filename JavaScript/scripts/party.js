// yearToCheck = 1999
// partyMessage = "Party like it\'s %d"

// birthYear = int(input("Birth Year? "))
// isClassic = birthYear <= yearToCheck

// if isClassic:
//     print(partyMessage % yearToCheck)
// else:
//     print(partyMessage % birthYear)  

const yearToCheck = 1999;
let partyYear = 0;
let birthYear = prompt(`What year were you born?`);
birthYear = parseInt(birthYear);
if (birthYear <= yearToCheck) {
    partyYear = yearToCheck;
}  else {
    partyYear = birthYear;
}
console.log(`Party like it's ${partyYear}!`)