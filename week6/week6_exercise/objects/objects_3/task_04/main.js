/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

const counter = {
    value: 5,
}

const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const displayValue = document.querySelector('#value');

let count = counter.value;

displayValue.textContent = `Value: ${counter.value}`;

const increaseValue = () => {
    count += 1;
    displayValue.textContent = `Value: ${count}`;
}
increaseButton.addEventListener('click', increaseValue)

const decreaseValue = () => {
    count -= 1;
    displayValue.textContent = `Value: ${count}`;
}
decreaseButton.addEventListener('click', decreaseValue)