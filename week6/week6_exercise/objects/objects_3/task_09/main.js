/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

const users = [
    { name: 'Suganya', score: 70 },
    { name: 'Prabagarane', score: 50 },
    { name: 'Devesh', score: 93 },
    { name: 'Pragadhish', score: 78 },
    { name: 'Sonia', score: 89 }
]

const sortButton = document.querySelector('#button');
const displaySortedList = document.querySelector('#display');
const displayBeforeSort = document.querySelector('#before-sort');

function displayOnPage(parentElement, users) {
    users.forEach(user => {
        const para = document.createElement('p');
        para.textContent = `Name: ${user.name}, Score: ${user.score}`;
        parentElement.appendChild(para);
        return para;
    });
}
displayOnPage(displayBeforeSort, users);

const sortDescending = () => {
    displaySortedList.style.display = 'block';
    users.sort(function (a, b) {
        if (a.score > b.score) { return 1 }
        if (a.score < b.score) { return -1 }
        return 0;
    })

    displayOnPage(displaySortedList, users);
}
sortButton.addEventListener('click', sortDescending);