const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio('bells.mp3');
const bellIcon = document.getElementById("bell") 
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)

function play() {
    audio.play()
    bellIcon.classList.add("animate")
    bellIcon.classList.remove("paused")
}
 
 function pause() {
    audio.pause()
    bellIcon.classList.add("paused")
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    bellIcon.classList.remove("animate")
}



// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.