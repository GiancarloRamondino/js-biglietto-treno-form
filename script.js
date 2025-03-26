
function calcola(){
    let km = parseFloat(document.getElementById('km-field').value);
    let anni = parseInt(document.getElementById('anni-field').value, 10);

    if (isNaN(km) || km <= 0) {
        console.error("Inserire un valore valido per i chilometri.");
        alert("Inserire un valore valido per i chilometri.");
        return;
    }

    if (isNaN(anni) || anni <= 0) {
        console.error("Inserire un valore valido per l'età.");
        alert("Inserire un valore valido per l'età.");
        return;
    }

    let price = (km * 0.21);
    let finalPrice;
    if (anni < 18) {
        finalPrice = price - (price * 20 / 100);
    } else if (anni >= 65) {
        finalPrice = price - (price * 40 / 100);
    } else {
        finalPrice = price;
    }
    console.log("Il prezzo è di " + (finalPrice).toFixed(2) + "€");// concatenazione di stringhe con le " " e il +//
    //console.log( `Il prezzo è di ${finalPrice}€`); //interpolazione di stringhe con il backtick ` e il ${}
    //console.log( 'Il prezzo è di ' + finalPrice + '€');// concatenazione di stringhe con l'apostrofo '' e il +
}
document.getElementById('btn').addEventListener('click', calcola);






