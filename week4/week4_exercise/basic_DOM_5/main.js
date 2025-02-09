/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const button = document.querySelector('#colorChangeBtn');
const userInput = document.querySelector('#inputBox');
const divText = document.querySelector('#paragraph');

const colorChange = () =>{
    let randomColor = Math.floor(Math.random()*16777215).toString(16); // Need to check the concept
    document.body.style.backgroundColor = randomColor;
    //document.body.style.randomColor = 'blue' // --- Here mention the background color
    console.log(randomColor); 
}
button.addEventListener('click',colorChange);

function updateColor(event){
    divText.style.color = event.target.value;
    divText.style.color = divText.textContent;
}
 userInput.addEventListener('input',updateColor);


