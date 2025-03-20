
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = "🕒 Heure actuelle : " + timeString;
}

setInterval(updateClock, 1000);
updateClock();