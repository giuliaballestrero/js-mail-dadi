/**
 * 
 * 1. Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// creo la lista di numeri da 1 a 6 
const numbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]

console.log (numbers);

// estraggo un numero random per il giocatore 1

const randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randomNumber1);

// estraggo un numero random per il giocatore 2

const randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randomNumber2);

//stabilisco il vincitore in base al numero più alto 
if (randomNumber1 > randomNumber2) {
    console.log('Giocatore 1, hai vinto!');
}

 else if (randomNumber2 > randomNumber1) {
    console.log('Giocatore 2, hai vinto!');
 }

 else if (randomNumber2 == randomNumber1) 
    console.log('Pareggio, rilanciare il dado!');


/**
 *     2. Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere.
Stampa un messaggio appropriato sull’esito del controllo.


//creo una lista di email 

const mailList = [
    'chandlerbing@friends.com',
    'rachelgreen@friends.com',
    'phoebebuffay@friends.com',
    'monicageller@friends.com',
    'joeytribbiani@friends.com',
    'rossgeller@friends.com'
]

console.log (mailList)
 */