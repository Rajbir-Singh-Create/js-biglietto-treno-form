let kmToCommute = document.querySelector(".kmToCommute");
let age = document.querySelector(".age");
const calculatePriceButton = document.querySelector(".calculatePriceButton");
let result = document.querySelector(".result");

let underAgeDiscout = 0;
let over65Discount = 0;
let ticketPrice = 0;
const pricePerKm = 0.21;

calculatePriceButton.addEventListener('click', function(event){
    event.preventDefault();

    kmToCommute = parseFloat(kmToCommute.value);
    console.log(kmToCommute);

    if(isNaN(kmToCommute)){
        console.log("valore non valido");
        alert("Inserisci un numero per favore"); // TODO design this element
    } else {
        // console.log("Km da percorrere: ",kmToCommute);
        ticketPrice = pricePerKm * kmToCommute;
        // console.log("Prezzo del biglietto: ",ticketPrice);

        // price applied for underage and elderly people
        if(age.value === "underAge") {
            underAgeDiscout = ticketPrice - ((ticketPrice * 20) / 100);
            ticketPrice = underAgeDiscout.toFixed(2).replace(".",",");
            console.log((`Il prezzo finale è di € ${ticketPrice}`));
        } else if (age.value === "over65"){
            over65Discount = ticketPrice - ((ticketPrice * 40) / 100);
            ticketPrice = over65Discount.toFixed(2).replace(".",",");
            console.log((`Il prezzo finale è di € ${ticketPrice}`));
        } else {
            ticketPrice = ticketPrice.toFixed(2).replace(".",",");
            console.log((`Il prezzo finale è di € ${ticketPrice}`));
        }
    }

    result.innerHTML = `Il prezzo finale è di € ${ticketPrice}`;
});