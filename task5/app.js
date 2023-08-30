'use strict'

const year1 = +prompt('введіть рік першої дати');
const mounth1 = +prompt('введіть місяць першої дати (1-12)');
const day1 = +prompt('введіть день першої дати');
const hours1 = +prompt('введіть години першої дати');
const minutes1 = +prompt('введіть хвилини першої дати');
const seconds1 = +prompt('введіть секунди першої дати');

const year2 = +prompt('введіть рік другої дати');
const mounth2 = +prompt('введіть місяць другої дати (1-12)');
const day2 = +prompt('введіть день другої дати');
const hours2 = +prompt('введіть години другої дати');
const minutes2 = +prompt('введіть хвилини другої дати');
const seconds2 = +prompt('введіть секунди другої дати');

const date1 = new Date(year1, mounth1 - 1, day1, hours1, minutes1, seconds1);
const date2 = new Date(year2, mounth2 - 1, day2, hours2, minutes2, seconds2);

const timeDiff = Math.abs(date2 - date1);

const diffHours = Math.floor(timeDiff / 3600000);
const diffMinutes = Math.floor((timeDiff % 3600000) / 60000);
const diffSeconds = Math.floor((timeDiff % 60000) / 1000);

const formattedHours = diffHours.toString().padStart(2, '0');
const formattedMinutes = diffMinutes.toString().padStart(2, '0');
const formattedSeconds = diffSeconds.toString().padStart(2, '0');

const formattedTimeDiff = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
console.log(`Різниця між датами: ${formattedTimeDiff}`)