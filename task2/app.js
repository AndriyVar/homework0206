'use strict'

let hours = +(prompt('Введіть години:'));
let minutes = +(prompt('Введіть хвилини:'));
let seconds = +(prompt('Введіть секунди:'));

if(hours < 0 || hours > 23 || isNaN(hours)) {
    hours = 0;
}

if(minutes < 0 || minutes > 59 || isNaN(minutes)) {
    minutes = 0;
}

if(seconds < 0 || seconds > 59 || isNaN(seconds)) {
    seconds = 0;
}

const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');
const formattedSeconds = seconds.toString().padStart(2, '0');

console.log(`Введений час: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`);