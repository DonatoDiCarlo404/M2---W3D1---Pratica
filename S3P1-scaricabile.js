/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
let numero1 = 30;
let numero2 = 30;

crazysum()

function crazysum(somma1, somma2) {
  if (numero1 === numero2) {
 return (numero1 + numero2) * 3 }
  else {
    return (numero1 + numero2)
  }
}
*/  

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
let num = 400;

boundary()

function boundary(numero1) {
  if ((num > 20 && num <= 100) || (num === 400)) {
    return true
  } else {
    return false
  }
}
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
let word = "EPICODE"

const reverseString = function reverseString(str) {
  return word.split("").reverse().join("")
}
reverseString()
*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
 let testo = "hello world"
upperFirst(testo)
function upperFirst(string) {
  const words = string.split(" ")
  const upperWords = []
  for (let i of words) {
    let wordUpper = i.charAt(0).toUpperCase() + i.slice(1)
    upperWords.push(wordUpper)
  }
  console.log(upperWords)
}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
const giveMeRandom = function (n) {
  const arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
  return arr
}
console.log(giveMeRandom(10))
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
let lato1 = 10;
let lato2 = 4

area()
let area = function (l1,l2) {
  return lato1 * lato2
}
*/  


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 
console.log(crazyDiff(3))

const crazyDiff = function (num) {
    if (num > 19) {
      return Math.abs(num - 19) * 3
    } else {
      return Math.abs(num - 19)
    }
  }
*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
