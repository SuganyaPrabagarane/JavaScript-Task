/* Create a variable sentence and assign it the value "Learning JavaScript is fun!".
Use .substring() to extract the word "JavaScript" from the sentence.
Print the extracted word using console.log().
Example output:
"Extracted word: JavaScript" */

let sentence = 'Learning Javascript is fun!';
let extractedString = sentence.substring(9,19);
console.log(`Extracted word: ${extractedString}`);