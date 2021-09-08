'use strict';

//Elementos sobre los que se va a trabajar
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const help = document.querySelector('.js-help');
const body = document.querySelector('body')
let tryNumber = document.querySelector('.js-try');
let counter = 1;

//Generar un número Aleatorio y pintarlo en consola
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
//número generado aleatoriamente con un máximo de 100
const randomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es: ${randomNumber}`);

//Generador de respuestas
function writer(text) {
    help.innerHTML = (text);
}

//Función que genere respuesta al número insertado
function checkResult() {
    const inputNumber = parseInt(input.value);
    const win = 'Has ganado campeona!!!';
    const below = 'Demasiado bajo';
    const overhead = 'Demasiado alto';
    const correctNumber = 'El número debe estar entre 1 y 100';

    //Comprobar si input.value es === a getRandomNumber
    if (inputNumber === randomNumber) {
        //help.innerHTML = win;
        writer(win);
    }

    //Comprobar si input.value es < getRandomNumber

    else if (inputNumber < randomNumber && inputNumber > 1) {
        writer(below);
    }

    //Comprobar si input.value es > getRandomNumber
    else if (inputNumber > randomNumber && inputNumber <= 100) {
        writer(overhead);
    }


    //Comprobar que el número esté entre 1 y 100
    else {
        writer(correctNumber);
    }

}

//Función que actualice el número de clicks que se hancen en el botón
function handleClickCounter() {
    tryNumber.innerHTML = counter++;
}

//Unificar funciones
function guessNumber(event) {
    event.preventDefault();
    checkResult();
    handleClickCounter();
}

//Llamar a la función
button.addEventListener('click', guessNumber);
