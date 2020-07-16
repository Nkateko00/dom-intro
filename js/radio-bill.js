//get a reference to the add button
const radioBillBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");
var fullRadioBill = theRadioBill();
function radioBill() {
    const radioItemTypeElement = document.querySelector(".billItemTypeRadio:checked");
    var radioItemValue = radioItemTypeElement.value;

    fullRadioBill.radioIncrement(radioItemValue);

    callTotalTwoElement.innerHTML = (fullRadioBill.callTotal()).toFixed(2);
    smsTotalTwoElement.innerHTML = (fullRadioBill.smsTotal()).toFixed(2);
    totalTwoElement.innerHTML = (fullRadioBill.totalBill().toFixed(2));

    showAllColors();
}
function showAllColors() {
    totalTwoElement.classList.remove("danger");
    totalTwoElement.classList.remove("warning");

    if (totalBillCounter >= 50) {
        totalTwoElement.classList.add("danger");
    }
    else if (totalBillCounter < 50 && totalBillCounter >= 30) {
        totalTwoElement.classList.add("warning");
    }
}

radioBillBtn.addEventListener("click", radioBill);

