/**
 * Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
 */

var word = prompt('Inserisci una parola');
var reverseWord = '';

// verifica se la parola è palindroma
if (palindromeWord(word) == word) {
    console.log('La parola ' + word + ' è palindroma.');   
} else {
    console.log('La parola ' + word + ' non è palindroma.');

}

// Definizione funzione 

function palindromeWord (word) {

    for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];

    }   

return reverseWord;
}


 /**
  * Pari e Dispari
    L’utente sceglie pari o dispari e un numero da 1 a 5. 
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
  */


