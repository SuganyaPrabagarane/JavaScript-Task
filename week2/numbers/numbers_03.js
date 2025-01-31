/* 

Create two variables:
num1 with the value "10".
num2 with the value "notANumber".
Convert num1 and num2 using parseFloat().
Print the sum of num1 and num2 using console.log().
(Note: If one value is NaN, the result will be NaN, which will be printed automatically.)
Example output:
NaN (if the addition involves invalid input).
10 (if both inputs are valid numbers).

*/

let num1 = "10";
let num2 = "sugan";
let num3 = parseFloat(num1);
let num4 = parseFloat(num2);
let sum = num3 + num4;
console.log(num1); // num1 is string
console.log(num2); // num2 is string
console.log(num3); // num3 is float number
console.log(num4); // Not a number
console.log(sum); // Not a number

let sum1 = num3 + 5;
console.log(sum1);