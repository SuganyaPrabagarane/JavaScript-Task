/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const button = document.querySelector('#btn1');
const text = document.querySelector('#p1');

// By using style.display      -------- Need to check with style.display - able to hide the text but couldn't display it
function toggle1 (){
    
        text.style.display = 'none';
    
    
}
button.addEventListener('click',toggle1);