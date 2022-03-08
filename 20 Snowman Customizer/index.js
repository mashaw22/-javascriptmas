 const inputs = document.querySelectorAll(".controls input");
 const eyeColor = document.getElementById("color")
 const buttonColor = document.getElementById("color2")
 const noseColor = document.getElementById("color3")

inputs.forEach((input) => {
    input.addEventListener("change", function changeColor() {
        document.documentElement.style.setProperty(`--${input.name}`,input.value)
    })
})



// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.