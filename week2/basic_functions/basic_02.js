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
console.log('Is the number Even:',(isEven(4)));

// Calling the function with variable
let num1 = isEven(7);
console.log('Is even number?',num1);


//Implicit return
const isEven1 = (num2) => num2 %2 === 0;
console.log(isEven1(7));


// Using ternary operator
function isEven2(num){
    return num %2 === 0 ? 'Even':'Odd';
}

console.log('Is Even or Odd:',isEven2(9));
