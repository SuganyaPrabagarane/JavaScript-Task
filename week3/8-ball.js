

    // let message = prompt("Enter number 1 to 8");
    // console.log(message);


    const magic8Ball = (number) => {

        let message = prompt("Enter number from 1 to 8");

        let randomNumber = Math.random(number)*8+1;
        let roundedRandomNumber = Math.floor(randomNumber);
    
        switch(true) {
            case roundedRandomNumber == 1:
                return alert('1_Yes, definitely!');
            case roundedRandomNumber == 2:
                return alert('2_It is certain');
            case roundedRandomNumber == 3:
                return alert('3_Reply hazy, try again');
            case roundedRandomNumber == 4:
                return alert('4_Ask again later');
            case roundedRandomNumber == 5:
                return alert('5_Better not tell you now.');
            case roundedRandomNumber == 6:
                return aleret('6_My sources say no.');
            case roundedRandomNumber == 7:
                return alert('7_Outlook not so good');
            case roundedRandomNumber == 8:
                return alert('8_Signs point to yes.');
            default:
                return alert('NOTHING');
    
            
        }
    
    }
    
    console.log(magic8Ball());
    
    
    
    
    
    