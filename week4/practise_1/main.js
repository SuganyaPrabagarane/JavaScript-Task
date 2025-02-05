const textExample = document.querySelector('p');
const textExample2 = document.querySelector('.myclass');
const textExample3 = document.querySelector('#myid');

const textExample4 = document.querySelectorAll('.myclass');


console.log(textExample.textContent);
console.log(textExample2.textContent);
console.log(textExample3.textContent);
console.log(textExample4); // it will show all the particular class in nodelist, its looks like array but its not work as array
console.log(textExample4[0].textContent) // it can show only the particular element like textExample4[0].





// const input = document.getElementById('input');
// const button = document.getElementById('insertBtn'); 
// const text = document.getElementById('result');