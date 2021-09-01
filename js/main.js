'use strict';

//Elementos sobre los que se va a trabajar
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const help = document.querySelector('.js-help');
const tryNumber = document.querySelector('.js-try');

//Generar un número Aleatorio y pintarlo en consola
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log('Mi número aleatorio es:'getRandomNumber(100));




//Llamar a la función
button.addEventListener('click', getRandomNumber)