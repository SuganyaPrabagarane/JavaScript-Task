/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const button = document.querySelector('#btn1');
const text = document.querySelector('#p1');

// By using style visibility       
function toggle1 (){
    if (text.style.visibility === 'hidden'){
        text.style.visibility = 'visible';
    }else{
        text.style.visibility = 'hidden';
    }
    
}
//button.addEventListener('click',toggle1);


// By using style display
const toggle2 =() =>{
    text.style.display === 'none' ? text.style.display = 'block': text.style.display = 'none';
    }
button.addEventListener('click',toggle2);


//By using InnerHTML (Not Recommanded)
function toggle(){
    if (text.innerHTML === ''){
        text.innerHTML = 'WELCOME BACK';

    }else {
        text.innerHTML = '';
    }
}
//button.addEventListener('click',toggle);



