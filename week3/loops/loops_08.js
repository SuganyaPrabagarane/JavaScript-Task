/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/


const findMinMax = () => {
    let smallNumber, largeNumber;
    let numbers;
    let arrayOfnumbers = [];
    let howManyNumber = Number(window.prompt('How many numbers do you want to enter:'));
    for (i=1; i<=howManyNumber; i++){
        numbers = Number(window.prompt('Enter the numbers:'));
        arrayOfnumbers.push(numbers);
        smallNumber = Math.min(...arrayOfnumbers);
        largeNumber = Math.max(...arrayOfnumbers);
    }

    console.log('Numbers given by the usser:',arrayOfnumbers);
    console.log('Smallest number:',smallNumber);
    console.log('Largest Number;', largeNumber)


}

findMinMax();