/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

function add(a,b){
    return a + b;
}

let sum1 = add(10,5);
console.log('sum1:',(sum1));


const add2 = (a,b) =>{
    return a+b;
}
let sum2 = add2(3,5);
console.log('sum2:',(sum2));

console.log('sum3:',add2(7,7));
console.log('sum4:',add(10,20));
console.log('sum5:',add(5,17));