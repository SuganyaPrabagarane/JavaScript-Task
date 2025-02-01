/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */


const calculateAverageUntilZero = () => {

    let getNumber;
    let count = 0;
    let sum = 0;
    let numbersArray = [];
    while(getNumber !== 0){
        let getNumber = Number(window.prompt('Enter the numbers:'));
        if (getNumber === 0){
            break;
        }
        numbersArray.push(getNumber)
        count ++;
        sum = sum + getNumber;
        average = sum / count ;

    }

    console.log(`The average of all entered number is: ${average}`);
    console.log(`Sum:${sum}`);
    console.log(`count: ${count}`);
    console.log(`All numbers entered: `, numbersArray)
    
}

calculateAverageUntilZero();



// let num1 = [2,4,6,7,3];
// let sum = 0;
// count=num1.length + 1;
// for (i=0; i<num1.length; i++){
//      sum = sum+ num1[i];
//      average = sum / count;

// }
// console.log(sum);
// console.log(count);
// console.log(average);