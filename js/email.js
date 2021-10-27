/**
 * Esercizio di oggi: JS Mail e Dadi
nome repo: js-mail-dadi
Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Ricordate che la documentazione è li per aiutarci: https://www.w3schools.com/js/js_random.asp
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
 */

// EMAIL EXERCISE

// Registered accounts
const mailList = ['tizio@gmail.com', 'caio@hotmail.it', 'sempronio@libero.it'];
console.log(mailList);

// Get user email
const getEmail = prompt('Inserire email registrata').trim().toLowerCase();
console.log(getEmail)

let emailFound = false; //flag

// Check if user email is registered
if(getEmail === '' || getEmail === null) {
    alert('Inserire una mail registrata');
    console.log(getEmail)
} else {

    for(let i = 0; i < mailList.length; i++) {
        if(mailList[i] === getEmail) {
            emailFound = true;
            console.log('email registrata, accesso effettuato con successo')
            alert('Accesso effettuato con successo!')
            break;
        }
    }
    console.log(emailFound);
}