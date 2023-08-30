'use strict'

const currentDateTime = new Date();
const currentHours = currentDateTime.getHours();
const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

const offsetSecond = parseInt(prompt('Введіть кількість секунд для змінення:'));

const newDateTime = new Date(currentDateTime);
newDateTime.setSeconds(currentSeconds + offsetSecond);
const newHours = newDateTime.getHours();
const newMinutes = newDateTime.getMinutes();
const newSeconds = newDateTime.getSeconds();

let currentStr = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
let newStr = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;

console.log(`Зараз '${currentStr}'.`);
console.log(`Через ${offsetSecond} секунд буде '${newStr}'.`);