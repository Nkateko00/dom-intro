 // get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
const myBillBtnElement = document.querySelector(".addToBillBtn");
//Totals
var firstCallTotalElement = document.querySelector(".callTotalOne");
var firstSmsTotalElement = document.querySelector(".smsTotalOne");
var totalBillElement = document.querySelector(".totalOne");
//Varialbes with scores
var fullTotalBill = 0;
var smsBill = 0;
var callBill = 0;
//create a variable that will keep track of the total bill

function textBill() {
    var billTypeStringValue = billTypeTextElement.value;
    if (billTypeStringValue === "call") {
        fullTotalBill += 2.75;
        callBill+=2.75;
    }
    else if (billTypeStringValue === "sms") {
        fullTotalBill += 0.75;
        smsBill+=0.75;
    }
    innerHyperText();
    showFullColors();
}

function showFullColors() {
    totalBillElement.classList.remove("danger");
    totalBillElement.classList.remove("warning");

    if (fullTotalBill >= 50) {
        totalBillElement.classList.add("danger");
    }
    else if (fullTotalBill < 50 && fullTotalBill >=30) {
        totalBillElement.classList.add("warning");
    }
}

function innerHyperText() {
    totalBillElement.innerHTML = fullTotalBill.toFixed(2);
    firstCallTotalElement.innerHTML = callBill.toFixed(2);
    firstSmsTotalElement.innerHTML = smsBill.toFixed(2);
}

myBillBtnElement.addEventListener("click", textBill);
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
