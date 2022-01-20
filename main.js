//chilometri da percorrere

let km = prompt ('inserire i km da percorrere');

//età del passeggero

let eta = prompt ('inserisci la tua età');

//prezzo del viaggio 0.21 al km

let prezzo = (km * 0,21);
document.getElementById('prezzo').innerHTML=prezzo

//20% minorenni - 40% over65

if  (eta < 18) { 
    let prezzo = prezzo - prezzo * 20/100

} else if (eta > 65) {
    let prezzo = prezzo - prezzo * 40/100


} else {

}

