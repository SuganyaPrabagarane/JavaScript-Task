/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

function addFruits(){
    const fruitButton = document.getElementById('addFruitButton');
    const inputbox = document.getElementById('fruitInput');
    let addList = document.getElementById('fruitslist');
    //addList.textContent = inputbox; --- >  It won't add new item into the existing list. it can replace the existing list with new item

    const newList = document.createElement('li');
    newList.textContent = inputbox.value;
    document.getElementById('fruitslist').appendChild(newList);
    console.log(newList);

}
// button.addEventListener('click',addFruits);


const input = document.querySelector('#fruitInput');
const button = document.querySelector('#addFruitButton');
const list = document.querySelector('#fruitslist');

function updateFruitList() {
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = '';
}

button.addEventListener('click',updateFruitList);