/**
 * Gioco dei dadi
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

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers)

const randomNum1 = numbers[Math.floor(numbers.length * Math.random())];
alert(`Il tuo numero è ${randomNum1}`)
console.log(randomNum1)


const randomNum2 = numbers[Math.floor(numbers.length * Math.random())];
alert(`Il numero del Computer è ${randomNum2}`)
console.log(randomNum2)

if (randomNum1 === randomNum2) {
    alert('I numeri sono uguali. Nessun vincitore scelto.')
} else if (randomNum1 > randomNum2) {
    alert(`Il numero ${randomNum1} è maggiore di ${randomNum2}. Hai vinto!`)
} else if (randomNum1 < randomNum2) {
    alert(`Il numero ${randomNum1} è minore di ${randomNum2}. Hai perso!`)
}

