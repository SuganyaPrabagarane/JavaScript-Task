/* Create a function named findMax that:
Takes three parameters, a, b, and c.
Returns the largest of the three numbers.
Call the function with the arguments 12, 7, and 20.
Print the result using console.log().

Hint: Use Math.max(). 
*/

const findMax = (a,b,c) => {
    return Math.max(a,b,c);
}

console.log('Maximum Number:',findMax(12,7,20));

//Find minimum number
const findMin = (a,b,c) => Math.min(a,b,c);
console.log('Minimum number:',findMin(12,7,20));
