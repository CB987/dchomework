// Write a function which takes an array of city objects like such:

const cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.


let coolerCities = [];
// for (let i = -5; i <= 5; i++){
//     numbers.push(i);
// }
// console.log(numbers);

// function positiveNumbers(x) {
//     if (x > 0) {
//         posNumbers.push(x);
//     } 
// }

//Chris':
// function isCityCool(city) {
//   return city['temperature'] < 70 
//   }
// function coolCities(citiesArray) {
//   let resultingCities = [];

//   citiesArray.forEach(function(city) {
//     if (isCityCool(city)) {
//       resultingCities.push(city);
//     }
//   });
//   coolCities(cities)
//   return resultingCities;
// }
// return citiesArray
//     .filter(isCityCool)
//     .map(getName);

function cityTemp(x) {
    return x.temperature < 80.0
    }
 return cities.filter(cityTemp);
// coolerCities = cities.filter(cityTemp);
// console.log(coolerCities);