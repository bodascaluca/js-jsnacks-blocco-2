// jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nome = ["Luca ","Marco","Marta","Sarah","Noemi","Francesca","Giulia","Mario","Federico","Arthur"];
const cognome = ["Berlusconi","Taffara","Rebecchi","Bodadca","Suppo","Cortale","Stefanatti"];

const falsiInvitati = [];

for (let i= 0; i < 3; i++){

    const randomNameIndex = [Math.floor(Math.random()*nome.length)];
    console.log(randomNameIndex);
    const randomName = nome[randomNameIndex];
    console.log(randomName);

    const randomLastNameIndex = [Math.floor(Math.random()*cognome.length)];
    console.log(randomLastNameIndex);
    const randomLastName = cognome[randomLastNameIndex];
    console.log(randomLastName);

    const randomGuest = `${randomName} ${randomLastName}`;
    falsiInvitati.push(randomGuest);
}

console.log(falsiInvitati);



