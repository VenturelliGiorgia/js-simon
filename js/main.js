const numeriRandom = document.getElementById("numeri-random");
const secondi = 30;
const seconds = 31;
let arrayNumeriRandom = [];
let numeriUtente = [];
let numeriTrovati = [];
let cont = 0;
numeriRandomGenerator();

function numeriRandomGenerator() {
    //genero 5 numeri random da 1 a 20
    for (let i = 0; i < 5; i++) {
        const num = Math.floor(Math.random() * 20) + 1;
        console.log(num);
        arrayNumeriRandom[i] = num;
        numeriRandom.append(arrayNumeriRandom[i]);
        numeriRandom.append(" ");
    }
    console.log(arrayNumeriRandom);
}

setTimeout(function () {

    const containerNumeriRandom = document.getElementById("container-numeri-random");
    containerNumeriRandom.classList.add("d-none");//vado a nasondere i numeri

}, secondi * 1000);


setTimeout(function () {

    numeriInseritiUtente();
}, seconds * 1000);


function numeriInseritiUtente() {

    for (let i = 0; i < 5; i++) {
        const num = prompt("inserisci in ordine i 5 numeri appena visti!");
        numeriUtente[i] = num;

        if (arrayNumeriRandom.includes(parseInt(num))) { //se questo numero è incluso nell'array vado a inserirlo nell'array numeriTrovati

            numeriTrovati.push(num);
            console.log(numeriTrovati);
            cont++;
        }
    }

    if (cont < 1) {
        alert("Mi dispiace non hai indovinato nessun numero...");
    } else if (cont === 1) {
        alert("Bravo, hai inserito un numero corretto! ");
    } else {
        alert("Bravissimo, hai inserito " + cont + " numeri corretti");
    }
    console.log(numeriUtente);
    console.log(numeriTrovati)

}
