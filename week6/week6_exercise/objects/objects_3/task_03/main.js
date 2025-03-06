/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const theme = {
    name: 'light',
    isActive: false,
}

const toggleButton = document.querySelector('#toggle');

const toggle =() =>{
    if (theme.name === 'light'){
        document.body.style.backgroundColor = 'red';
        theme.isActive = true;

    } else 
     {
        document.body.style.backgroundColor = 'black';
        theme.isActive = true;
    }
    console.log(theme)
}
toggleButton.addEventListener('click', toggle)