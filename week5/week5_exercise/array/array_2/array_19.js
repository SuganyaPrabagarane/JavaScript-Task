// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];

/*
Create a new array where each price is increased by 10%.
Expected outcome: [5.5, 11, 16.5, 22]
*/
// Write your function here

const increasedPrice = prices.map(price => price + (price * 0.1));
console.log(increasedPrice);