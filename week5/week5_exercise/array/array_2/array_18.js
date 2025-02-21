// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];

/*
Use splice to remove "30" and replace it with "25" and "27".
Expected outcome: [10, 20, 25, 27, 40, 50]
*/
// Write your code here

numbers.splice(2,1,25,27);
console.log(numbers);