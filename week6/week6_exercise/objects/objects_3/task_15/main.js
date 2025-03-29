/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

const foxTracker = {
    foxes: [
        { name: 'Foxy', location: 'Helsinki' },
        { name: 'Blaze', location: 'Espoo' },
        { name: 'Shadow', location: 'Vanta' },
    ],
}

const inputFox = document.querySelector('#fox');
const inputLocation = document.querySelector('#location');
const addButton = document.querySelector('#addBtn');
const displayOnPage = document.querySelector('#display');

foxTracker.foxes.forEach(fox => {
    const list = document.createElement('li');
    list.textContent = `Name: ${fox.name} and Location: ${fox.location}`;
    displayOnPage.appendChild(list);
});

const addFox = () => {
    const foxName = inputFox.value;
    const foxLocation = inputLocation.value;
    const list1 = document.createElement('li');
    list1.textContent = `Name: ${foxName} and Location: ${foxLocation}`;
    displayOnPage.appendChild(list1);
    inputFox.value = '';
    inputLocation.value = '';

    foxTracker.foxes.push(fox);
    console.log(foxTracker);
}
addButton.addEventListener('click', addFox)