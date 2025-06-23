"use strict";
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}
setInterval(updateTime, 1000);
updateTime(); // Initial call
