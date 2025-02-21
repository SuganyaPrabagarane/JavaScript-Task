// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ['Deer', 'Bear', 'Wolf'];
let farmAnimals = ['Cow', 'Sheep', 'Goat'];

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/
// Write your code here

const animals = [...forestAnimals,...farmAnimals];
console.log('Combine animals by using spresd operator:',animals);

const animals1 = forestAnimals.concat(farmAnimals);
console.log('Combine animals by using Concat method:', animals1);