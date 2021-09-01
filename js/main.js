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

//Pintar en consola el número generado aleatoriamente
const randomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es: ${randomNumber}`);

//Función que genere respuesta al número insertado
function checkResult(event) {
    event.preventDefault();
    const inputNumber = parseInt(input.value);
    const win = 'Has ganado campeona!!!';
    const below = 'Demasiado bajo';
    const overhead = 'Demasiado alto';
    const correctNumber = 'El número debe estar entre 1 y 100';

    //Comprobar si input.value es === a getRandomNumber
    if (inputNumber === randomNumber) {
        help.innerHTML = win;
    }

    //Comprobar si input.value es < getRandomNumber

    else if (inputNumber < randomNumber && inputNumber > 1) {
        help.innerHTML = below;
    }

    //Comprobar si input.value es > getRandomNumber
    else if (inputNumber > randomNumber && inputNumber < 100) {
        help.innerHTML = overhead;
    }

    //Comprobar que el número esté entre 1 y 100
    else {
        help.innerHTML = correctNumber;
    }

}

//Función que actualice el número de clicks que se hancen en el botón
function changeTryNumber() {
    parseInt(tryNumber.innerHTML)++;
}

//Llamar a la función
//button.addEventListener('click', changeTryNumber);
button.addEventListener('click', checkResult);