/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

const button = document.querySelector('#btn');
const countDisplay = document.querySelector('#count');

let count = 0;

function updateCount(){
    count++;
    countDisplay.textContent = `No.of times button clicked: ${count}`;
}
button.addEventListener('click',updateCount);