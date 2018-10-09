// Write a function which takes an array of city objects like such:

const cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
// as input and returns a new array containing the names of the cities


let cityNames = [];

// function cityName(x) {
//     cityNames.push(x.name);
// }

function cityName(x) {
    return x.name;
}

// cities.forEach(cityName);
cityNames = cities.map(cityName);
console.log(cityNames);