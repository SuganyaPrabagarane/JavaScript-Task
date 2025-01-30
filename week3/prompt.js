

    // let message = prompt("Enter number 1 to 8");
    // console.log(message);


const magic8Ball = (number) => {

    let randomNumber = Math.random(number)*8+1;
    let roundedRandomNumber = Math.floor(randomNumber);

    switch(true) {
        case roundedRandomNumber == 1:
            return '1_Yes, definitely!';
        case roundedRandomNumber == 2:
            return '2_It is certain';
        case roundedRandomNumber == 3:
            return '3_Reply hazy, try again';
        case roundedRandomNumber == 4:
            return '4_Ask again later'
        case roundedRandomNumber == 5:
            return '5_Better not tell you now.';
        case roundedRandomNumber == 6:
            return '6_My sources say no.';
        case roundedRandomNumber == 7:
            return '7_Outlook not so good';
        case roundedRandomNumber == 8:
            return '8_Signs point to yes.';
        default:
            return 'NOTHING';

        
    }

}

console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());
// console.log(magic8Ball());

let outputMessage = alert(roundedRandomNumber);
console.log(outputMessage);
