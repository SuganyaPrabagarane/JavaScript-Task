/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

const movies = [
    {title: 'Inception', director: 'Christopher Nolan', rating: 8.8 },
    {title: 'The Matrix', director: 'The Wachowskis', rating: 8.2 },
    {title: 'The Shawshank Redemption', director: 'Frank Darabont', rating: 6 },
    {title: 'Parasite', director: 'Bong Joon-ho', rating: 7 },
]
const jsonString = JSON.stringify(movies);

function filterHighRatedMovies(jsonString){
    const moviesArray = JSON.parse(jsonString);
    const highRatedMovies = moviesArray.filter(movie => movie.rating > 8)
    console.log(highRatedMovies)
}
filterHighRatedMovies(jsonString);