let items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
let input = document.getElementById("input")
const addBtn = document.getElementById("add-btn")
const deleteBtn = document.getElementById("delete-btn")
// deleteBtn.disabled = "true"

function renderItems() {
    let listItems = ""
    for(let i = 0; i < items.length; i++){
        listItems += `
        <div class="checklist-item">
            <input type="checkbox"> 
            <label class="strikethrough">${items[i]}</label>
        </div>`
    checklist.innerHTML = listItems
    }
}

renderItems()


addBtn.addEventListener("click", function(){
    if(input.value){
        items.push(input.value)
        input.value = ""
        renderItems()
    }
})

deleteBtn.addEventListener("click", function() {
    items.pop()
    renderItems()
})



// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

