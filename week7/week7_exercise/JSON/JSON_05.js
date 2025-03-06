/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport = {
    temperature: 30,
    humidity: 60,
    conditions: 'Sunny'
}

const weatherJSON = JSON.stringify(weatherReport);
const weatherObject = JSON.parse(weatherJSON);
console.log(weatherObject.conditions);
