/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

const gameProgress = {
    level: 5,
    score: 1200,
    livesRemaining: 3,
}

const gameProgressJSON = JSON.stringify(gameProgress);
const gameProgressObject = JSON.parse(gameProgressJSON);
gameProgressObject.score = gameProgressObject.score+100;
console.log(gameProgressObject);
