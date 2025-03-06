/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

const movies = [
    {title: 'Inception', director: 'Christopher Nolan', rating: 8.8 },
    {title: 'The Matrix', director: 'The Wachowskis', rating: 8.2 },
    {title: 'The Shawshank Redemption', director: 'Frank Darabont', rating: 6 },
    {title: 'Parasite', director: 'Bong Joon-ho', rating: 7 },
]

const moviesJSON = JSON.stringify(movies);
const moviesObject = JSON.parse(moviesJSON);
moviesObject.forEach(movie => { 
    if (movie.rating > 8) {
        console.log('Movies rating higher than 8:',movie.title)
    }
});