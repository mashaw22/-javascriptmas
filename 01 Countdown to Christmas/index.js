const countdownDisplay = document.getElementById("countdown-display")
const d = new Date().getDate()

function renderCountdown(){
    const christmas = 25
    countdownDisplay.innerHTML = christmas - d
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.