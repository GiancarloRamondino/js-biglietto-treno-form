
function calcola(){
    let km = parseFloat(document.getElementById('km').value);
    let price = (km * 0.21);
    let anni = parseInt(document.getElementById('anni').value, 10);
    let finalPrice;
    if(anni < 18 ){
        finalPrice = price - (price * 20 / 100);
    }
    else if(anni >= 65){
        finalPrice = price - (price * 40 / 100);
    }
    else{
        finalPrice = price;
    }
    console.log( "Il prezzo è di " + (finalPrice).toFixed(2) + "€");// concatenazione di stringhe con le " " e il +//
    //console.log( `Il prezzo è di ${finalPrice}€`); //interpolazione di stringhe con il backtick ` e il ${}
    //console.log( 'Il prezzo è di ' + finalPrice + '€');// concatenazione di stringhe con l'apostrofo '' e il +
}
document.getElementById('btn').addEventListener('click', calcola);
