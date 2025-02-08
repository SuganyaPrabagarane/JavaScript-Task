/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/


const input = document.querySelector('#textbox');
const divText = document.querySelector('#div1');

function updateText(event){
   divText.textContent = 'User entered: ' + event.target.value;
}
input.addEventListener('input',updateText);

// Using innerText
const updateDisplayText =() =>{
   divText.innerText =input.value;
}
input.addEventListener('input',updateDisplayText);