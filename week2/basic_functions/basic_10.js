/* Create a function named cleanAndTransform that:
Takes one parameter, str.
Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
Returns the transformed string.
Call the function with " JavaScript is powerful! ".
Print the result using console.log().

*/


const cleanAndTransform = (str) => {
    let trimedText = str.trim();
    let loweredCase = trimedText.toLowerCase();
    let replacedWord = loweredCase.replace('powerful','amazing');
    return replacedWord;
}

console.log(cleanAndTransform('  JavaScript is powerful  '));
