/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/


//  const logEvenNumbers = () => {
//     for (i=2; i<=50; i+=2){
//         console.log(i);
//         let a = 100 - i;
//         if (a<50){
//             console.log(a);
//         }
//     }

//  }

//  logEvenNumbers();


const logEvenNumbers2 = () => {
    let i = 2;
    while (i<100){
        if (i%2===0){
            
            console.log(i,100-i);
            i+=2;
        }
       

    }
}

logEvenNumbers2();




//  const logEvenNumbers1 = () => {
//     for (i=2; i<100; i++){
//         if (i % 2 === 0){
//             console.log(i);
//         }
//     }
//  }

//  logEvenNumbers1();