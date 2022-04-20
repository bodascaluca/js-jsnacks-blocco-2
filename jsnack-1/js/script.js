// jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// FOR
// let sum = 0;
// for (let i = 0; i < 5; i++){
//     const numeroDato = parseInt(prompt(`dimmi un numero`)); 
//     sum += numeroDato;
// }
// console.log(sum);




// WHILE
// let richiesta = 0;
// let sum = 0;

// while(richiesta < 5){
//     //  console.log("interazione", richiesta);
//     const numeroDato = parseInt(prompt(`dimmi un numero`)); 
//     sum += numeroDato;
//     richiesta++;
// }
// console.log(sum);




// !isNaN    PER VERIFICARE SE E' UN NUMERO O MENO
let richiesta = 0;
let sum = 0;

while(richiesta < 5){
    const numeroDato = parseInt(prompt(`dimmi un numero`)); 
    if (!isNaN(numeroDato)){
        sum += numeroDato;
        richiesta++;
    } else {
        alert(`Non è un numero`);
    }
    
}
console.log(sum);