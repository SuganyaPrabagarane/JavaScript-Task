/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/


 const logEvenNumbers = () => {       // Have some queries need to get clarify
    let evenNumber = 0;
    for (i=2; i<=50; i+=2){
        evenNumber += ','+i;
        let a = 100 - i;
        if (a<100){
            evenNumber+= ','+a;
        }  
    }
    console.log(evenNumber);

 }
logEvenNumbers();


 // Using while loop
// const logEvenNumbers2 = () => {
//     let i = 2;
//     while (i<=50){
//         if (i%2===0){
//             console.log(i,100-i);
//             i+=2;
//         }

//     }
// }

// logEvenNumbers2();


// Using for loop
//  const logEvenNumbers1 = () => {
//     for (i=2; i<100; i++){
//         if (i % 2 === 0){
//             console.log(i,100-i);
//         }
//     }
//  }
//  logEvenNumbers1();