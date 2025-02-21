// Exercise 1: Determine array length and conditional check
//let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
// Write your function here

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const myAlphabetLength = () =>{
    let i = myAlphabet.length;
    console.log('Array Length:',i);
        if (i>=5) {
            console.log("Array length is sufficient" );
    } else {
        console.log("Array length is too short");
    }
}
myAlphabetLength();

// Using Ternary Operator
let myAlphabet1 = ['A', 'B', 'C', 'D'];

const myAlphabetLength1 =() => myAlphabet1.length>=5 ? "Array length is sufficient" : "Array length is too short";
console.log(`Using ternary opeator: ${myAlphabetLength1()}`);