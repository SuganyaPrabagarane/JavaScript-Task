
    const magic8Ball = (number) => {

        let message = prompt("Enter number 1 to 8");
        //console.log(message);



        let randomNumber = Math.random(number)*8+1;
        let roundedRandomNumber = Math.floor(randomNumber);
    
        switch(true) {
            case message == 1:
                return alert('1_Yes, definitely!');
            case message == 2:
                return alert('2_It is certain');
            case message == 3:
                return alert('3_Reply hazy, try again');
            case message == 4:
                return alert('4_Ask again later');
            case message == 5:
                return alert('5_Better not tell you now.');
            case message == 6:
                return alert('6_My sources say no.');
            case message == 7:
                return alert('7_Outlook not so good');
            case message == 8:
                return alert('8_Signs point to yes.');
            default:
                return alert('NOTHING');
    
            
        }
    
    }
    
    console.log(magic8Ball());
   
    
    
    
    
    