
const inputBox = document.querySelector('#magicBall');
const answer = document.querySelector('.answer');

const magic8Ball = (number) => {
    let numberInput = Number(inputBox.value);
    let randomNumber = Math.random(number) * 8 + 1;
    let roundedRandomNumber = Math.floor(randomNumber);

    switch (true) {
        case roundedRandomNumber == 1:
            return answer.textContent = 'Sunny - Clear skies with bright sunshine';
        case roundedRandomNumber == 2:
            return answer.textContent = 'Cloudy - Sky covered with clouds';
        case roundedRandomNumber == 3:
            return answer.textContent = 'Rainy - Take umberella with you';
        case roundedRandomNumber == 4:
            return answer.textContent = 'Stromy - Do not go outside';
        case roundedRandomNumber == 5:
            return answer.textContent = 'Snowy - Enjoy the fresh snow';
        case roundedRandomNumber == 6:
            return answer.textContent = 'Windy - Stay in home';
        case roundedRandomNumber == 7:
            return answer.textContent = 'Foggy - Take jackets with you';
        case roundedRandomNumber == 8:
            return answer.textContent = 'Dry - Drink more water to hydrate';
        default:
            return answer.textContent = 'Humid - Go outside and get fresh air';
    }

}
inputBox.addEventListener('change', magic8Ball);





