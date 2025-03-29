/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

const musicAlbums = [
    { title: "Thriller", artist: "Michael Jackson", releaseYear: 1982 },
    { title: "Back in Black", artist: "AC/DC", releaseYear: 2001 },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", releaseYear: 1973 },
    { title: "Abbey Road", artist: "The Beatles", releaseYear: 2003 }
]

musicAlbums.filter(musicAlbum => {
    if (musicAlbum.releaseYear > 2000) {
        console.log(musicAlbum);
    }
});
