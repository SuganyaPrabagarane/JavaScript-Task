/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

const weather = {
    temperature: 25,
    humidity:60,
    condition: 'Rainy'
}

const checkWeather =() =>{
    if (weather.condition === 'Rainy'){
        console.log('Take an umbrella!');
    }
}
checkWeather();