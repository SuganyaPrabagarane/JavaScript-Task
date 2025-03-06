/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

const jsonString = '{"name":"Suganya","age":30,"grade":"A"}'

const javaScriptObject = JSON.parse(jsonString);
console.log(javaScriptObject);
console.log(javaScriptObject.name);