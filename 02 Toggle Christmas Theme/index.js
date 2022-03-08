const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

christmasBtn.addEventListener("click", function(){
    console.log("christmas")
    document.body.classList.add("christmas")
    document.body.classList.remove("snow")
    greeting.innerHTML = "🎅 Merry Christmas!"
}) 

snowBtn.addEventListener("click", function(){
    console.log("snow")
    document.body.classList.add("snow")
    document.body.classList.remove("christmas")
    greeting.innerHTML = "❄️ Let It Snow!"
}) 

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.