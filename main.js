//chilometri da percorrere

let km = prompt ('inserire i km da percorrere');

//età del passeggero

let eta = prompt ('inserisci la tua età');

//prezzo del viaggio 0.21 al km

let prezzoBase = (km * 0,21);

//20% minorenni - 40% over65

if  (eta < 18) { 
    var prezzo = prezzoBase - prezzoBase * 20/100

} else if (eta > 65) {
    var prezzo = prezzoBase - prezzoBase * 40/100

} else {
    var prezzo = prezzoBase

}

document.getElementById('prezzo').innerHTML=prezzo


