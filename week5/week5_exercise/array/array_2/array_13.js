// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
// Write your code here

let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];

const checkAnimal = zooAnimals.every(animal => animal === 'Tiger');
console.log('Is Tiger available in zoo:',checkAnimal);

const checkAnimal2 = zooAnimals.some(animal => animal == 'Panda');
console.log('Is panda available in zoo:', checkAnimal2);