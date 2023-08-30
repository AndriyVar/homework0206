'use strict'

const hours = +prompt('Введіть години');
const minutes = +prompt('Введіть хвилини');
const seconds = +prompt('Введіть секунди');

console.log(`Введений час у секундах: ${hours * 3600 + minutes * 60 + seconds} секунд`);