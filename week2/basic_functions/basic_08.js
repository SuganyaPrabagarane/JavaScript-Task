/* Create a function named roundNumber that:
Takes two parameters, num and precision.
Returns the number rounded to the specified precision (number of decimal places).
Call the function with 19.56789 and 2.
Print the result using console.log().

Hint: Use .toFixed().

*/

const roundNumber = (num, precision) => { 
    return parseFloat(num.toFixed(precision));   
}

console.log(roundNumber(19.56789, 2));

//Assign value for default parameter 
const roundNumber1 = (num, precision = 3) => { // Assign default parameter "precision = 3"
    return parseFloat(num.toFixed(precision));   
}

console.log(roundNumber1(19.56789));