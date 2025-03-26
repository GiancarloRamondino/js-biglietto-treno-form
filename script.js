
function calcola(){
    let km = parseFloat(document.getElementById('km-field').value);
    let anni = document.getElementById('anni-field').value;

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
    console.log("Il prezzo è di " + (finalPrice).toFixed(2) + "€");// concatenazione di stringhe con le " " e il +//
    //console.log( `Il prezzo è di ${finalPrice}€`); //interpolazione di stringhe con il backtick ` e il ${}
    //console.log( 'Il prezzo è di ' + finalPrice + '€');// concatenazione di stringhe con l'apostrofo '' e il +
}
document.getElementById('btn').addEventListener('click', calcola);






