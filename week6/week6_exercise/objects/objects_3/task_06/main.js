/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

class Task {
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = completed
    }
}

const button = document.querySelector('#button');
const displayOnPage = document.querySelector('#display');

const addTask = () => {
    const tasks = [];
    const addTask = new Task('JavaScript', 'Object Exercises', 'Yes');  // Creating new object by using constructor
    tasks.push(addTask);                                              // push that object into array
    tasks.forEach(task => {
        const para = document.createElement('p');                   // create new paragraph element to display array items
        para.textContent = `Title: ${task.title}, Description: ${task.description}, Completed:${task.completed}`;
        displayOnPage.appendChild(para);              // Add this 'p' element as child for 'div' to display array of items
    });

}
button.addEventListener('click', addTask)