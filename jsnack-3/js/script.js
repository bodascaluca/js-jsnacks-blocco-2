// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

const numeroDato = parseInt(prompt(`Dimmi un numeoro`));
console.log(numeroDato);

// const numeroCubo = (Math.pow(numeroDato, 3)) ;
// console.log(numeroCubo);

for (let i = 1; i <= numeroDato; i++){
    const numeroCubo = (Math.pow(i, 3)) ;
    console.log(numeroCubo);
}


