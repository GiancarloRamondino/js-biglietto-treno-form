
function calcola(){
    let km = parseFloat(document.getElementById('km-field').value);
    let anni = document.getElementById('anni-field').value;
    const button = document.getElementById('btn');

    if (isNaN(km) || km <= 0) {
        console.error("Inserire un valore valido per i chilometri.");
        alert("Inserire un valore valido per i chilometri.");
        return;
    }
    if (anni !== 'Minorenne' && anni !== 'Maggiorenne' && anni !== 'Pensionato') {
        console.error("Inserire un'età valida.");
        alert("Inserire un'età valida.");
        return;
    }

    let price = (km * 0.21);
    let finalPrice;

    if (anni === 'Minorenne') {
        finalPrice = price - (price * 20 / 100);
    } else if (anni === 'Pensionato') {
        finalPrice = price - (price * 40 / 100);
    } else {
        finalPrice = price;
    }
    console.log("Il prezzo è di " + (finalPrice).toFixed(2) + "€");
    
    //costo-biglietto
    document.getElementById('costo-biglietto').innerText = finalPrice.toFixed(2) + "€";
}
document.getElementById('btn').addEventListener('click', calcola);

//Dichiara variabili
//nome
const input = document.getElementById('name-field');
//offerta
const input3 = document.getElementById('anni-field');
//bottone
const button = document.getElementById('btn');

//aggiungi eventi al click in vista

button.addEventListener('click', function(){
    let name = input.value.trim();
    console.log(name);
    document.getElementById('nome-passeggero').innerText = name;
    //offerta
    let name3 = "Biglietto " + input3.value.trim();
    console.log(name3);
    document.getElementById('offerta').innerText = name3;
    //carrozza
    let randomCarrozza = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    console.log(randomCarrozza);
    document.getElementById('carrozza').innerText = randomCarrozza;
    //codice-cp
    let randomCode = Math.floor(Math.random() * 10000) + 1; // Generate random train code
    console.log(randomCode);
    document.getElementById('codice-treno').innerText = randomCode;
});


















