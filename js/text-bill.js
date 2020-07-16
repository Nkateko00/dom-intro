 // get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
const myBillBtnElement = document.querySelector(".addToBillBtn");
//Totals
var firstCallTotalElement = document.querySelector(".callTotalOne");
var firstSmsTotalElement = document.querySelector(".smsTotalOne");
var totalBillElement = document.querySelector(".totalOne");
 var theFinalTextBill = theTextBill()
function inputBill() {
     var textArea =  billTypeTextElement.value
     theFinalTextBill.textBill(textArea);
     
    totalBillElement.innerHTML = (theFinalTextBill.totalBill()).toFixed(2);
    firstCallTotalElement.innerHTML = (theFinalTextBill.callTotal()).toFixed(2);
    firstSmsTotalElement.innerHTML = (theFinalTextBill.smsTotal()).toFixed(2);
    showFullColors();
}

function showFullColors() {
    totalBillElement.classList.remove("danger");
    totalBillElement.classList.remove("warning");
    totalBillElement.classList.add(theFinalTextBill.showColor());
}

myBillBtnElement.addEventListener("click", inputBill);