/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

const weatherApp = {
    async fetchWeather(city) {
        try {
            const response = await fetch(`https://openweathermap.org/api ${city}`);
            if (!response.ok) {
                throw new error('Enter valid url or correct city name');
            }
            const weatherData = await response.json();
            console.log('weather data:', weatherData);
            return weatherData;
        } catch (error) {
            console.log('Error:', error.message);
        }
    }
};
weatherApp.fetchWeather(helsinki);

// its not working

