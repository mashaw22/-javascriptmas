const btn = document.getElementById("btn")
const foodHolder = document.getElementById("foodHolder")
btn.addEventListener("click", findYum)

function findYum() {
    fetch("https://foodish-api.herokuapp.com/api/images/dessert")
        .then(response => response.json())
        .then(data => foodHolder.innerHTML = `<img src="${data.image}">`)
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

