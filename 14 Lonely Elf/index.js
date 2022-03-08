const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const message = document.getElementById("message")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
    elf.textContent += "🧝"
    message.textContent = "Elfy has friends! 😉"
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
