//get a reference to the add button
const radioBillBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");
var totalBillCounter =0;
var smsTotalCounter = 0;
var callTotalCounter =0;
//add an event listener for when the add button is pressed
function radioBill(){
    const radioItemTypeElement = document.querySelector(".billItemTypeRadio:checked");
    //needs to be executed in the event since radio button selection changes between the button being clicked
    var radioItemValue = radioItemTypeElement.value;
    if(radioItemValue === "call"){
        totalBillCounter += 2.75;
        callTotalCounter += 2.75
    }
    else if(radioItemValue === "sms"){
        totalBillCounter += 0.75;
        smsTotalCounter += 0.75;
    }
    internalText();
    showAllColors();

}
function showAllColors() {
    totalTwoElement.classList.remove("danger");
    totalTwoElement.classList.remove("warning");

    if (totalBillCounter >= 50) {
        totalTwoElement.classList.add("danger");
    }
    else if (totalBillCounter < 50 && totalBillCounter >=30) {
        totalTwoElement.classList.add("warning");
    }
}

function internalText(){
    callTotalTwoElement.innerHTML = callTotalCounter.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalCounter.toFixed(2);
    totalTwoElement.innerHTML = totalBillCounter.toFixed(2);
    
}
radioBillBtn.addEventListener("click",radioBill);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
