// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.

let sign = document.getElementById("sign")
const textInput = document.getElementById("text-input")
const sendBtn = document.getElementById("send-btn")
const sentDisplay = document.getElementById("sent-display")
let bellsAudio = new Audio("Jingle-bells-single-hit.mp3")


textInput.addEventListener("keyup", function() {
    sentDisplay.classList.add("remove-display")
    sentDisplay.classList.remove("sent-display")
    sign.textContent = "" 
    sign.textContent = textInput.value
})

sendBtn.addEventListener("click", function() {
    if (textInput.value){
        sign.textContent = ""
        textInput.value = ""
        sentDisplay.classList.add("sent-display")
        sentDisplay.classList.remove("remove-display")
        bellsAudio.play()
        confetti({
            particleCount: 150,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() -0.2
            }
        })
    }
})