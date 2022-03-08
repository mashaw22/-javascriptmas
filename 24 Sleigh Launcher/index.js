const crew = document.getElementById("crew")
let launchpad = document.getElementById("launchpad")
let launchAudio = new Audio("audio/Stinger-3-The-Night-Before-Christmas-www.FesliyanStudios.com-Steve-Oxen.mp3")
let returnAudio = new Audio("audio/Stinger-The-Night-Before-Christmas_-_www.FesliyanStudios.com_Steve_Oxen.mp3")
let btn = document.getElementById("btn")

btn.addEventListener("click", launch)

function changeBtnOops() {
    btn.textContent = "Oops, you forgot something!"
}

function changeBtnLaunch() {
    btn.textContent = "Launch!"
}

function launch() {
    if(btn.textContent === "Launch!") {
        launchpad.classList.remove("wobble-hor-bottom")
        launchpad.classList.add("vibrate-1")
        crew.classList.add("slide-out-elliptic-right-fwd")
        crew.classList.remove("slide-in-elliptic-left-bck")
        launchAudio.play()
        setTimeout(changeBtnOops, 7000)
    } else if (btn.textContent === "Oops, you forgot something!") {
        launchpad.classList.remove("vibrate-1")
        launchpad.classList.add("wobble-hor-bottom")
        crew.classList.remove("slide-out-elliptic-right-fwd")
        crew.classList.add("slide-in-elliptic-left-bck")
        returnAudio.play()
        setTimeout(changeBtnLaunch, 6000)
    }
    
}


// function return() {
//     returnAudio.play()
// }

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
