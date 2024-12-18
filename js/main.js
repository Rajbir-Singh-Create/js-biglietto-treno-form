let kmToCommute = document.querySelector(".kmToCommute");
let age = document.querySelector(".age")
const calculatePriceButton = document.querySelector(".calculatePriceButton");
let finalPrice = document.querySelector(".result");

let minorAgeDiscout = 0;
let elderAgeDiscount = 0;
let ticketPrice = 0;
let result = 0;
const pricePerKm = 0.21;

calculatePriceButton.addEventListener('click', function(event){
    event.preventDefault();

    if(isNaN(kmToCommute)){
        console.log("valore non valido");
        alert("Inserisci un numero per favore");
    } else {
        kmToCommute = Number(kmToCommute);
        console.log("Km da percorrere: ",kmToCommute);
        ticketPrice = pricePerKm * kmToCommute;
        console.log("Prezzo del biglietto: ",ticketPrice);

        
    }

});