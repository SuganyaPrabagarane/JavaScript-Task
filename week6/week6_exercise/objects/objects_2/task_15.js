/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

const airports = [
    { name: 'Heathrow Airport', country: 'United Kingdom', flightsPerDay: 145 },
    { name: 'Helsinki Airport', country: 'Finland', flightsPerDay: 13000 },
    { name: 'Chennai International Airport', country: 'India', flightsPerDay: 160 },
    { name: 'Hamad International Airport', country: 'Qatar', flightsPerDay: 1500 }
]

const findBusyAirport = () => {
    airports.sort(function (a, b) {
        let firstAirport = a.flightsPerDay;
        let secondAirport = b.flightsPerDay;
        if (firstAirport < secondAirport) { return 1 }  // sorting from highest to lowest
        if (firstAirport > secondAirport) { return -1 }
        return 0;
    })
    console.log(airports[0]);
}
findBusyAirport();
