// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
// Write your code here

let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle'];

let sortedAnimals = safariAnimals.sort();

let reversedAnimals = sortedAnimals.toReversed();
console.log(reversedAnimals);