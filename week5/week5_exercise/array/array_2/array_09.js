// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
// Write your code here

let zooAnimals = ['Elephant', 'Giraffe', 'Panda', 'Fox', 'Kangaroo'];
let index = zooAnimals.indexOf('Penquin')
console.log('Index of Fox: ', index);
if (index === -1){
    console.log('Penguin is not in the zoo.')
}