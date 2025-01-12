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
    
    // button status elements
    const spinnerElement = calculatePriceButton.querySelector('#spinner')
    const statusText = calculatePriceButton.querySelector('.status');
    const originalStatusText = statusText.innerHTML;

    // string conversion to float
    kmToCommute = parseFloat(kmToCommute.value);
    // console.log("Km da percorrere: ",kmToCommute);

    if(isNaN(kmToCommute)){
        result.innerHTML = "Inserisci il numero di Km per favore"
    } else if(age.value ==="selectAge"){
        result.innerHTML = "Inserisci la tua fascia di età per favore"
    } else {
        // changing button status
        calculatePriceButton.disabled = true;
        spinnerElement.classList.toggle('d-none');
        statusText.innerHTML = `Calcolo il prezzo del biglietto...`;

        setTimeout(() => {
            ticketPrice = pricePerKm * kmToCommute;
            // console.log("Prezzo del biglietto: ",ticketPrice);

            // price applied for underage and elderly people
            if(age.value === "underAge") {
                underAgeDiscout = ticketPrice - ((ticketPrice * 20) / 100);
                ticketPrice = underAgeDiscout;
            } else if (age.value === "over65"){
                over65Discount = ticketPrice - ((ticketPrice * 40) / 100);
                ticketPrice = over65Discount;
            } else {
                ticketPrice;
            }

            // ticket price conversion
            ticketPrice = ticketPrice.toFixed(2).replace(".",",");

            // reset button status
            calculatePriceButton.disabled = false;
            spinnerElement.classList.toggle('d-none');
            statusText.innerHTML = originalStatusText;
    
            result.innerHTML = `Il prezzo finale è di € ${ticketPrice}`;
        }, 1000);
    }
});