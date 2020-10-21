// PARTE ELEMENTI!!

var container=document.getElementById('Biglietto');
var bottoneGenera=document.getElementById('BottoneGenera');
var bottoneAnnulla=document.getElementById('BottoneAnnulla');

// generazione eventi!!

bottoneGenera.addEventListener('click', function(){
    // dati utente
    var nome =document.getElementById('nome').value
   
    var kmDaPercorrere=document.getElementById('km').value
    
    var fasciaEta =document.getElementById('fascia-eta').value
    
    // costo BIGLIETTO
    var prezzo=0.21;

    var prezzoBiglietto= prezzo * kmDaPercorrere;
    var offerta='biglietto Standard';

    // condizzioni per l'offerta!!
    // sconto minorenne
    if(fasciaEta=='minorenne'){
        prezzoBiglietto-=prezzoBiglietto*0.2;
        offerta='sconto minorenne'
    }
    // sconto over65
    else if(fasciaEta=='over65'){
        prezzoBiglietto-=prezzoBiglietto*0.4;
        offerta='sconto over65'
    }
    prezzoBiglietto=prezzoBiglietto.toFixed(2)+'Euro';
    var NCarrozza=Math.floor(Math.random()*10)+1;
    
    var codiceXX=Math.floor(Math.random()* (90000 - 99999) )+90000;
    document.getElementById('nome-passeggero').innerHTML=nome;
    document.getElementById('offerta-applicata').innerHTML=offerta;
    document.getElementById('carrozza').innerHTML=NCarrozza;
    document.getElementById('codice-cp').innerHTML=codiceXX;
    document.getElementById('costo').innerHTML=prezzoBiglietto;



})

