// Exercise 7: Filter only positive temperatures from the temperatures array
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
// Write your function here

const getPositiveTemperatures = temperatures.filter(temperature => temperature >0);
console.log(getPositiveTemperatures);
