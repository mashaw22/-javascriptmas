let vegetarian = true

const btn = document.getElementById("btn")
let food = document.getElementById("food")
const numInput = document.getElementById("num-input")
const vegetarianInput = document.getElementById("vegetarian-input")

btn.addEventListener("click", renderDinner)

function renderDinner() {
    if (vegetarian === true && numInput.value > 0) {
        food.textContent = "nut roast"
    } else {
        if (numInput.value <= 0) {
            food.textContent = "..."
        } else if (numInput.value <= 4) {
            food.textContent = "turkey"
        } else {
            food.textContent = "goose"
        }
    }
    numInput.value = ""
}


vegetarianInput.addEventListener("change", function() {
    if (this.checked) {
        vegetarian = true
    } else {
        vegetarian = false
    }
})



// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

