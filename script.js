const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secEl = document.getElementById('secs');

const newYears = "1 Jan 2021";
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate- currentDate) / 1000;

    const days = Math.floor((totalSeconds/3600)/24); 
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const secs = Math.floor(totalSeconds%60);

    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//Initial Call

countdown();

setInterval(countdown, 1000);