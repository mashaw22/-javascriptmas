const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]

function translate(){
    for (let i = 0; i < greetingsArr.length; i++) {
        if (languageSelector.value === greetingsArr[i].language)
        greetingDisplay.textContent = greetingsArr[i].greeting
    }
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
