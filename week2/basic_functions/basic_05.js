/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

*/

const generateRandomNumber = (min,max) => {
    let randomNumber = Math.random(generateRandomNumber) * (max - min + 1) + min;
    let roundedRandomNumber = Math.floor(randomNumber);
    return roundedRandomNumber;

}
console.log(generateRandomNumber(1,10));



const generateRandomNumber1 = (min,max) => {
    return Math.floor(Math.random(generateRandomNumber1) * (max - min + 1) + min);
}
console.log(generateRandomNumber1);