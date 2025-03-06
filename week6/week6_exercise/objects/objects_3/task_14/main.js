/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const inputBookTitle = document.querySelector('#title');
const inputAuthorName = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const addButton = document.querySelector('#addBtn')
const displayOnPage = document.querySelector('#display');

const addBook =() =>{
    const bookTitle = inputBookTitle.value;
    const authorName = inputAuthorName.value;
    const pages = inputPages.value;
    const booklist = document.createElement('li');
    booklist.textContent = `Title: ${bookTitle}, Author: ${authorName}, Pages: ${pages}`;
    displayOnPage.appendChild(booklist);
    inputBookTitle.value = '';
    inputAuthorName.value = '';
    inputPages.value = '';

}

addButton.addEventListener('click',addBook)