/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/

const isEven = (num) =>{
    return num %2 === 0;
}

let num1 = isEven(3);
console.log((num), 'is Even or Not:');

console.log('Is the number is Even:',(isEven(3)));