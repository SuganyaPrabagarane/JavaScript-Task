/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */

const generateMultiplicationTable = () => {
    let multiply;
    let number = 5;
    for (i=1; i<=10; i++){
        multiply = number * i;
        console.log(`${number} * ${i} = ${multiply}`);
    }
}
generateMultiplicationTable();

const generateMultiplicationTable1 = () => {
    let multiply;
    let number = window.prompt('Enter the number to generate multiplication');
    for (i=1; i<=10; i++){
        multiply = number * i;
        console.log(`${number} * ${i} = ${multiply}`);
    }
}
generateMultiplicationTable1();