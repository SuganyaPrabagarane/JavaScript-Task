/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

const jsonArray = '[{"name":"Suganya","age":10,"grade":5},{"name":"Sonia","age":12,"grade":7},{"name":"Devesh","age":6,"grade":1},{"name":"Pragadhish","age":8,"grade":3}]'

const javascriptArray = JSON.parse(jsonArray);
console.log(javascriptArray);