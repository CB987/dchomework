// celsius = float(input("What is the temperature in degrees Celsius?"))
// fahrenheit = (celsius*9/5) + 32
// print("The temperature is %.1f degrees Fahrenheit" % (fahrenheit))

let celsius = prompt(`What is the temperature in degrees Celsius?`)
celsius = parseInt(celsius)
const fahrenheit = (celsius*9/5) + 32
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`) 