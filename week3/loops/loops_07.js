/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/


const sumAndAverage = () => {
    let getNumber;
    let sum = 0;
    let average;
    let count = 0;
    let getNumberArray = [];
    let smallNumber, largeNumber;
    for (i=1; i<=10; i++) {
        getNumber = Number(window.prompt('Enter the numbers:'));
        getNumberArray.push(getNumber);
        sum = sum + getNumber;
        count++;
        average = sum / count;
        smallNumber = Math.min(...getNumberArray);
        largeNumber = Math.max(...getNumberArray);
    
    }
    

    console.log(`sum: ${sum}`);
    console.log(`average:${average}`);
    console.log(`Entered numbers:` ,getNumberArray);
    console.log('Smallest number:', smallNumber);
    console.log('Large Number:', largeNumber);
}

sumAndAverage();