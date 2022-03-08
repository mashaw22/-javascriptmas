const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const body = document.body

btn.addEventListener("click", function fix(){
  greeting.innerHTML = "🎄 Merry Christmas! ❄️"
  greeting.style.fontFamily = "Mountains of Christmas"
  console.log("ta-da")
  body.style.background = "#007c9c"
  btn.innerHTML = "👍"
})

  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.


//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.







