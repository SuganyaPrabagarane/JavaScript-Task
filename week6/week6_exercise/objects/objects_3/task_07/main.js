/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

const weatherApp = {
    async fetchWeather(city) {
        try {
            const response = await fetch(city);
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    }
};
weatherApp.fetchWeather('https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key');



