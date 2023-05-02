let countDownDate = new Date("May 10, 2023 23:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
    //Get date now
    let dateNow = new Date().getTime();

    //Date between now and countdown date
    let dateDiff = countDownDate - dateNow;

    //Get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}`: hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}`: seconds;
}, 1000)