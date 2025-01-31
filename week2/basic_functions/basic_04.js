/* Create a function named capitalize that:
Takes one parameter, str.
Returns the string with the first character in uppercase and the rest in lowercase.
Call the function with the string "javascript".
Print the result using console.log().

Hint: Use str[0].toUpperCase() and str.slice(1).toLowerCase().

*/

const capitalize = (str) => {
    let upperCase = str[0].toUpperCase();
    let slicedString = str.slice(1).toLowerCase();
    return upperCase + slicedString;
    
}
console.log(capitalize('javaScript'));



const capitalize1 = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize1('jAVASCRIPT'));