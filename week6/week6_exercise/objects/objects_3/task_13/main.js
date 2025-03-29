/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

const displayTime = document.querySelector('#display');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

const timer = {
    seconds: 0,
    duration: null,
    start() {
        this.duration = setInterval(() => {
            displayTime.textContent = `Seconds: ${this.seconds}s`;
            this.seconds++;
        }, 1000)
    },
    stop() {
        clearInterval(this.duration);
    }
}

startBtn.addEventListener('click', () => {
    timer.start();
});
stopBtn.addEventListener('click', () => {
    timer.stop();
})




