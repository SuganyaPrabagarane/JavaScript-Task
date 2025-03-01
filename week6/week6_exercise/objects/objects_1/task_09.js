/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

const movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", rating: 9.3 },
    { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 },
    { title: "The Dark Knight", director: "Christopher Nolan", rating: 7.9 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", rating: 8.9 },
    { title: "Forrest Gump", director: "Robert Zemeckis", rating: 8 }
  ];

for (const movie of movies){
    if (movie.rating > 8){
        console.log(movie.title);
    }
}