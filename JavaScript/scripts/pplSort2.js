// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.


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

let mapped = people.map(function(name, i) {
  return { index: i, value: name.length };
})
 mapped.sort(function(a, b) {
   if (a.value > b.value) {
     return 1;
   }
   if (a.value < b.value) {
     return -1;
   }
   return 0;
  });
  let result = mapped.map(function(name) {
    return people[name.index];
  });
  
console.log(result);