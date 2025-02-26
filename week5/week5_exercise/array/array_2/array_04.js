// Exercise 4: Log each item of myArr without using a loop
let myArr = [1, 'Dog', 3.14, false];

/*
Log each item in myArr without explicitly using a loop.
Expected outcome: 1, "Dog", 3.14, false
*/
// Write your code here

let myArr1 = '';
myArr1 = myArr + ''
console.log(myArr1);

console.log(myArr.join(', '));

console.log(...myArr.map((item, index) => index < myArr.length - 1 ? item + ',' : item));
    