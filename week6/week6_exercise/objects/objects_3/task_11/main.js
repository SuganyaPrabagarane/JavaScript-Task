/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

const posts = [
    { title: 'Front end development', content: 'Languages and frameworks used in frontend', likes: 5 },
    { title: 'Javascript', content: 'The importants of javascript and basic functions', likes: 10 },
    { title: 'HTML and CSS', content: 'The syntax and basic functions of HTML and css', likes: 5 },
    { title: 'Back end development', content: 'Languages and frameworks used in back end', likes: 10 }
]

const displayOnPage = document.querySelector('#display');

function createLikeButton(parentElement) {
    const likeButtons = document.createElement('button');
    likeButtons.classList.add('likeBtn')
    likeButtons.textContent = 'Like';
    parentElement.appendChild(likeButtons);
    return likeButtons;
}

function updateCount() {
    posts.forEach(post => {
        const postContainer = document.createElement('li');
        const title = document.createElement('p');
        const content = document.createElement('p');
        const likes = document.createElement('p');

        title.textContent = `Title: ${post.title}`
        content.textContent = `Content: ${post.content}`
        likes.textContent = `Likes: ${post.likes}`

        postContainer.appendChild(title);
        postContainer.appendChild(content);
        postContainer.appendChild(likes);
        displayOnPage.appendChild(postContainer);

        const likeButton = createLikeButton(postContainer);
        const update = () => {
            post.likes += 1;
            likes.textContent = `Likes: ${post.likes}`;
        }
        likeButton.addEventListener('click', update)

    })

}

updateCount();