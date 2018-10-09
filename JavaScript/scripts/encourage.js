// Given an array of people's names:

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.



// function cityName(x) {
//     cityNames.push(x.name);
// }

function encourage(x) {
    console.log(`Good job, ${x}!`);
}

// cities.forEach(cityName);
people.forEach(encourage);
