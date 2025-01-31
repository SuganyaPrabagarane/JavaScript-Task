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


const add1 = (a,b) =>{
    return a+b;
}
let sum2 = add1(3,5);
console.log('sum2:',(sum2));

//Passing the values inside the console log
console.log('Sum3:',add(1,2));
console.log('Sum4:',(add1(2,4)));