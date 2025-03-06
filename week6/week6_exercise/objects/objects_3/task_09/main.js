/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

const users = [
    { name: 'Suganya', score: 70},
    { name: 'Prabagarane', score: 50},
    { name: 'Devesh', score: 93},
    { name: 'Pragadhish', score: 78},
    { name: 'Sonia', score: 89}
]

const sortButton = document.querySelector('#button');
const displaySortedList = document.querySelector('#display')

const sortDescending = () => {                      // Sorting the score by descending order
    users.sort(function (a,b) {
        if (a.score > b.score) { return 1}
        if (a.score < b.score) { return -1}
         return 0;
    })
    users.forEach(user => {                         // Display the updated list on webpage
        const para = document.createElement('p');
        para.textContent = `Name: ${user.name}, Score: ${user.score}`;
        displaySortedList.appendChild(para);
    })
}
sortButton.addEventListener('click',sortDescending);