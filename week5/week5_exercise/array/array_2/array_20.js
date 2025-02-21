// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ['apple', 'banana', 'cherry', 'kiwi', 'strawberry'];

/*
Create a new array containing only words longer than 5 letters from the words array.
Expected outcome: ['banana', 'cherry', 'strawberry']
*/
// Write your function here

const filteredWords1 = words.filter(word => word.length > 5)
console.log(filteredWords1)
        