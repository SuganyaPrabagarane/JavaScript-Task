/* 
1. Create two variables, a and b, and assign them integer values (e.g., 8 and 3).
2. Perform the following operations using a and b, and store the results in separate variables:
 - Add the values (sum).
 - Subtract b from a (difference).
 - Multiply the values (product).
 - Divide a by b (quotient).
 - Find the remainder when a is divided by b (remainder).
3. Use console.log() to print the results of each operation. For example, print: "The sum of a and b is: 11"
4. Add comments to explain what each operation does.
5. Change the values of a and b and observe how the results change.
6. Try the same operations with one positive and one negative number.
*/


let a = -10;
let b = -2;
const add = a + b;
const sub = a - b;
const mul = a * b;
const divd = a / b;
const modulo = a % b;
console.log("The sum of a and b is:", add);
console.log("The difference of a and b is:", sub);
console.log("The product of a and b is:", mul);
console.log("The division of a and b is:", divd);
console.log(`The remainder of a and b is:${modulo}`);