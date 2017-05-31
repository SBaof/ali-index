const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setSecond() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = (second / 60) * 360 + 90;
    if (secondsDegrees == 90) {
        secondHand.style.transition = 'all 0s';
    } else {
        secondHand.style.transition = 'all 0.05s';
    }
    const minutesDegrees = ((minute + second / 60) / 60) * 360 + 90;
    if (minutesDegrees == 90) {
        minuteHand.style.transition = 'all 0s';
    } else {
        minuteHand.style.transition = 'all 1s';
    }
    const hoursDegrees = (((hour - 12) + (minute / 60)) / 12) * 360 + 90 + 360;
    if (hoursDegrees == 90) {
        hourHand.style.transition = 'all 0s';
    } else {
        hourHand.style.transition = 'all 3s';
    }

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // console.log(`${hour}:${minute}:${second} - ${hoursDegrees}:${minutesDegrees}:${secondsDegrees}`);
}
//setInterval(setSecond, 1000);
setTimeout(function () {
    setSecond();
    setTimeout(arguments.callee, 1000)
}, 1000);
