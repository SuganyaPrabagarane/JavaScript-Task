/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const theme = {
    name: 'light',
    isActive: true,
}

const toggleButton = document.querySelector('#toggle');

const toggle = () => {
    if (theme.name === 'light') {
        document.body.style.backgroundColor = 'darkblue';
        // theme.name = 'dark';

    }
    if (theme.name === 'dark') {
        document.body.style.backgroundColor = 'black';
        // theme.name = 'light';
    }
    console.log(theme)
}
toggleButton.addEventListener('click', toggle)