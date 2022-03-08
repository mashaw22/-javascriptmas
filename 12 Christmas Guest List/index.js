const input = document.getElementById("input")
const addBtn = document.getElementById("add-btn")
const removeBtn = document.getElementById("remove-btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]


addBtn.addEventListener("click", addGuest)
removeBtn.addEventListener("click", removeLastGuest)

function generateGuestList() {
    for (let i = 0; i < guests.length; i++) {
        guestList.innerHTML += `<li>${guests[i]}</li>`
    }
}

generateGuestList()

function addGuest() {
    if (input.value) {
        addBtn.removeAttribute("disabled")
        guestList.textContent = ""
        guests.push(input.value)
        generateGuestList()
        input.value = ""
    } else {
        addBtn.disabled = true
    }
}

function removeLastGuest() {
    guestList.textContent = ""
    guests.pop()
    generateGuestList()
}


// How to remove a specific item from an array: 

// function removeEvilRelative() {
//     const goodGuests = guests.filter(function (f) {return f !== "Evil Relative"})
// }

// removeEvilRelative()

// var newArray = myArray.filter(function(f) {return f !== 'two' })
// console.log(newArray)


// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


