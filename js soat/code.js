let clockInterval;

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.querySelector('.clock').innerText = `${hours}:${minutes}:${seconds}`;
        
    let sana = `${day} ${oylar[monthIndex]}, ${year}-yil`;
    document.querySelector('.date').innerText = sana;
}

document.getElementById("startBtn").addEventListener("click", () => {
    if (!clockInterval) {
        updateClock();
        clockInterval = setInterval(updateClock, 1000);
    }
});

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(clockInterval);
    clockInterval = null;
});
