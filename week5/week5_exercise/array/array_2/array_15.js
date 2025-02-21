// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/
// Write your code here

let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];

const toUppercase = attendees.map(name => name.toUpperCase());
console.log(toUppercase);