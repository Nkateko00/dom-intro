const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
const billTotalElementTime= document.querySelector(".total");
//create the function that will be called when the calculate button is pressed
var totalBill = billCalculation()
function  calculateBill(){
    innerText();
    showColors();
}
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function showColors() {
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.add(totalBill.testLevel());
    //console.log(totalBill);
}

function innerText() {
    billTotalElement.innerHTML = (totalBill.calculateTheBill()).toFixed(2);
    totalBill.calculateTheBill(billStringValue);
}
calculateBtnElement.addEventListener("click", calculateBill());