const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0

select.addEventListener("change", calculateSpeed)
time.addEventListener("change", calculateSpeed)


let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    timeTaken = time.value
    for (let i=0; i<destination.length; i++) {
        if (currentLocation == destination[i].name)
        speed = destination[i].distanceFromPrevDestination/timeTaken
    }
    speedometer.textContent = Math.round(speed)
    // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
   
}

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
