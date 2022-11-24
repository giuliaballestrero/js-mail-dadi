/**
 * 
 * 1. Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


// estraggo un numero random per il giocatore 1

const randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

// estraggo un numero random per il giocatore 2

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);

//stabilisco il vincitore in base al numero più alto 
if (randomNumber1 > randomNumber2) {
    console.log('Giocatore 1, hai vinto!');
}

 else if (randomNumber2 > randomNumber1) {
    console.log('Giocatore 2, hai vinto!');
 }

 //stabilisco un pareggio 

 else if (randomNumber2 == randomNumber1) 
    console.log('Pareggio, rilanciare il dado!');




/**
 *     2. Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere.
Stampa un messaggio appropriato sull’esito del controllo.
 */


//creo il form html dove l'utente inserirà la sua mail

//recupero l'elemento html dove l'utente inserirà la mail
const userMail = document.getElementById('userMail');

//recupero l'elemento html che al suo click permette di inviare i valori
const userButton = document.querySelector('button');

//creo una lista di email da verificare per sapere chi può accedere 

const mailList = [
    'chandlerbing@friends.com',
    'rachelgreen@friends.com',
    'phoebebuffay@friends.com',
    'monicageller@friends.com',
    'joeytribbiani@friends.com',
    'rossgeller@friends.com'
]

//quando l'utente clicca raccolgo il valore inserito
userButton.addEventListener ('click', function() {
    const mailValue = userMail.value;
    console.log(mailValue);

// definisco la variabile del riusltato
let mailOk = false;

//scorro la lista e verifico se la mail è presente

for ( let i = 0 ; i < mailList.length ; i++) {
    if (mailList[i] === mailValue) {
        mailOk = true;    
    } 
}

if (mailOk === true) {
        console.log('Il tuo codice di accesso è howyoudoin');   
    }

    else {
        console.log('Accesso negato'); 
    }

});
