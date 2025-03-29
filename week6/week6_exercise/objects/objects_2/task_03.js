/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

const restaurants = [
    { name: 'The Italian Bistro', cuisineType: 'Italian', rating: 4.5 },
    { name: 'Sushi House', cuisineType: 'Japanese', rating: 3 },
    { name: 'Taco Haven', cuisineType: 'Mexican', rating: 4 },
    { name: 'Curry Corner', cuisineType: 'Indian', rating: 4.6 },
    { name: 'Pasta Paradise', cuisineType: 'Italian', rating: 2.8 }
]

// using map method
restaurants.map(restaurant => {
    if (restaurant.rating >= 4) {
        console.log(restaurant);
    }
});

// using filter method
const highRatingRestaurants = restaurants.filter(restaurant => restaurant.rating >= 4);
console.log(highRatingRestaurants);
