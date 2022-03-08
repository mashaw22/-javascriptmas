const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
let bellsAudio = new Audio("60_Second-2020-10-27_-_Christmas_Miracle_-_www.FesliyanStudios.com_Steve_Oxen.mp3")
let volumeControl = document.getElementById ("volume-control")

playBtn.addEventListener("click", function(){
    bellsAudio.play()
})

pauseBtn.addEventListener("click", function(){
    bellsAudio.pause()
})

stopBtn.addEventListener("click", function(){
    bellsAudio.pause()
    bellsAudio.currentTime = 0
})

volumeControl.addEventListener("input", function(e) {
    bellsAudio.volume = e.currentTarget.value / 100;
})

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
 