/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

const shoppingList =
    { items: ['apple', 'Banana', 'Curd'] }

const inputItem = document.querySelector('#item');
const addButton = document.querySelector('#addBtn');
const displayIteam = document.querySelector('#display');

shoppingList.items.forEach(item => {
    const itemList = document.createElement('li');
    itemList.textContent = item;
    displayIteam.appendChild(itemList);
});

const addItem = () => {
    const item = inputItem.value;
    const itemList1 = document.createElement('li');
    itemList1.textContent = item;
    displayIteam.appendChild(itemList1);
    inputItem.value = '';

    shoppingList.items.push(item);
    console.log(shoppingList);
}
addButton.addEventListener('click', addItem)

