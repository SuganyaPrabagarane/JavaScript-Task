/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/
// Your code here

localStorage.setItem('message', 'Hello, LocalStorage!');
const getMessage = localStorage.getItem('message');
console.log("Task1: getMessage: ", getMessage);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here

const userSettings = {
    theme: 'dark',
    language: 'English',
}

const userSettingsJSON = JSON.stringify(userSettings);
localStorage.setItem('userSettingLocalStorage', userSettingsJSON);
const returnedSettings = localStorage.getItem('userSettingLocalStorage');
const userSettingsObject = JSON.parse(returnedSettings);
console.log('Task2: Access theme from userSettingsObject:', userSettingsObject.theme);


/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here

const favoriteBooks = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
]

const favoriteBooksJSON = JSON.stringify(favoriteBooks);
localStorage.setItem('favoriteBooksLoclStorage', favoriteBooksJSON);
const returnedFavoriteBooks = localStorage.getItem('favoriteBooksLoclStorage');
const favoriteBooksObject = JSON.parse(returnedFavoriteBooks);
console.log('Task:3 Titles of all books:');
favoriteBooksObject.forEach(book => console.log(book.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here
const fox = {
    name: 'Fiona',
    age: 3,
    habitat: 'Woodlands'
}

function saveToLocalStorage(key, object) {
    const foxJSON = JSON.stringify(fox);
    localStorage.setItem('foxLocal', foxJSON);
    const returnedFox = localStorage.getItem('foxLocal')
    console.log('Task4: Get saved data from local storage:', returnedFox);
}
saveToLocalStorage();

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

function getFromLocalStorage(key) {
    const returnedFox1 = localStorage.getItem('foxLocal')
    const foxObject = JSON.parse(returnedFox1);
    console.log('Task5: Retrived valuse from local storage:', foxObject)
}
getFromLocalStorage();

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here

const userProfile = {
    username: 'Suganya',
    email: 'suganya@gmail.com',
    preferences: {
        theme: 'light',
        notification: true
    }
}

const userProfileJSON = JSON.stringify(userProfile);
localStorage.setItem('userProfileLocalStorage', userProfileJSON);
const returnedUserProfile = localStorage.getItem('userProfileLocalStorage');
const userProfileObject = JSON.parse(returnedUserProfile);
userProfileObject.preferences.theme = 'Dark';
console.log('Task:6, userProfileObject with updated theme property:', userProfileObject);
console.log('Task:6, Display only the preference:', userProfileObject.preferences)

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

const shoppingList = {
    items: ['Milk', 'Curd', 'Banana', 'Orange', 'Coffe Powder']
}

let shoppingListJSON = JSON.stringify(shoppingList);
localStorage.setItem('shoppingListLocalStorage', shoppingListJSON);

function addItemToList(item) {
    const returnedShoppingList = localStorage.getItem('shoppingListLocalStorage');
    const shoppingListObject = JSON.parse(returnedShoppingList);
    //console.log("Before: ", shoppingListObject);  // In browser shoppingListObject displays the items with newly added value before running the push() command
    shoppingListObject.items.push('Apple');
    shoppingListJSON = JSON.stringify(shoppingListObject);
    localStorage.setItem('shoppingListLocalStorage', shoppingListJSON);
    console.log('Task:7 Updated list:', localStorage.getItem('shoppingListLocalStorage'));
}
addItemToList();

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here

const counter = { count: 0 };

let counterJSON = JSON.stringify(counter);
localStorage.setItem('counterLocalStorage', counterJSON);

function incrementCounter() {
    const returnedCounter = localStorage.getItem('counterLocalStorage');
    const counterObject = JSON.parse(returnedCounter);
    counterObject.count = counterObject.count + 1;
    counterJSON = JSON.stringify(counterObject);
    localStorage.setItem('counterLocalStorage', counterJSON)
    console.log('Task:8, After updating count value:', localStorage.getItem('counterLocalStorage'));
}
incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

const tasks = [
    { id: 250001, description: 'HTML', completed: true },
    { id: 250002, description: 'CSS', completed: false },
    { id: 250003, description: 'JavaScript', completed: true },
    { id: 250004, description: 'UI Design', completed: false },
]

let tasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasksLocalStorage', tasksJSON);

function markTaskComplete(taskId) {
    let returnedTasks = localStorage.getItem('tasksLocalStorage');
    const tasksObject = JSON.parse(returnedTasks);
    tasksObject.forEach(task => {
        if (task.id === taskId) {
            task.completed = true;
        }
    });
    tasksJSON = JSON.stringify(tasksObject);
    localStorage.setItem('tasksLocalStorage', tasksJSON);
    console.log('Task:9 After updating the completed property:', localStorage.getItem('tasksLocalStorage'))
}

markTaskComplete(250004);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here

function clearLocalStorage() {
    localStorage.clear();
    console.log('Local Storage:1', localStorage.getItem('tasksLocalStorage'))
    console.log('Local Storage:2', localStorage.getItem('counterLocalStorage'))
}
clearLocalStorage();
