/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here

const library = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 }
];


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

console.log(`Title of first book: ${library[0].title}`);
library[1].yearPublished = 2024;
console.log(`Modify the year published for second book: ${library[1].yearPublished}`);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library[0].genres = ['Fiction', 'Drama', 'Classic'];          // Add new property by using Dot notation
console.log('Add new property genres to first book:', library[0].genres);

library[0]['isAvailable'] = true;                           // Add new property by using Bracket notation
console.log('Add boolean property isAvailable to first book:', library[0]['isAvailable']);


/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
// Builder function:
function Book(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}

const library1 = new Book('Moby Dick', 'Herman Melville', 1851, ["Adventure", "Classic", "Fiction"]);
library.push({ ...library1 });


/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

function createBook(title, author, yearPublished, genres) {
    return { title, author, yearPublished, genres };
}
const book1 = createBook('Pride and Prejudice', 'Jane Austen', 1813, ["Romance", "Classic", "Fiction"]);
console.log(book1);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here

const jsonLibraray = JSON.stringify(library);
console.log('Converting to JSON Library:', jsonLibraray);
const backtoLibrary = JSON.parse(jsonLibraray);
console.log('Converting from JSON Library:', backtoLibrary[0].title);