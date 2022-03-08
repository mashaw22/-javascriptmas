const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
const startingMinutes = .25
let time = startingMinutes * 60
// let affirmation = document.getElementById("affirmation")
// let timeout;

btn.addEventListener("click", startCountdown)

function startCountdown() {
    setInterval(updateCountdown, 1000)    
}

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    
    seconds = seconds < 10 ? "0" + seconds : seconds
    
    timer.innerHTML = `${minutes}:${seconds}`
    time--
    time = time < 0 ? 0 : time
}

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.