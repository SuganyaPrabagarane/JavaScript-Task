// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin'];

/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
// Write your code here

let removeLast = birdSpecies.pop(); // Remove last element
let removeFirst = birdSpecies.shift(); // Remove first element
console.log(birdSpecies);

