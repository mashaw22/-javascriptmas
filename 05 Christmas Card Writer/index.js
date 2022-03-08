const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
const toInput = document.getElementById("to-input")
const fromInput = document.getElementById("from-input")
const messageInput = document.getElementById("message-input")
const inputDisplay = document.getElementById("input-display")

btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

function writeGreeting() {
    if(toInput.value && fromInput.value){
        inputDisplay.innerHTML = 
            `To: ${toInput.value} From: ${fromInput.value}`
    } else if (toInput.value){
        inputDisplay.innerHTML = 
            `To: ${toInput.value}`
    } else if (fromInput.value){
        inputDisplay.innerHTML = 
            `From: ${fromInput.value}`
    } else {
        inputDisplay.innerHTML = ""
    }
    if(messageInput.value){
        greetingDisplay.textContent = messageInput.value
    } else{
        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
        greetingDisplay.textContent = randomGreeting
    }
    toInput.value = ""
    fromInput.value = ""
    messageInput.value = ""
}

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.