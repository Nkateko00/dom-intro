const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
//This is the element used to store the total,most important one too
const billTotalElementTime= document.querySelector(".total");
//create the function that will be called when the calculate button is pressed
function billCalculation(){
    showColors();
    billTotalElementTime.innerHTML = calculateTheBill(billStringElement.value).toFixed(2);

}

//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function showColors() {
    billTotalElementTime.classList.remove("danger");
    billTotalElementTime.classList.remove("warning");
   
    if(calculateTheBill(billStringElement.value)>=30){
       billTotalElementTime.classList.remove("warning");
      billTotalElementTime.classList.add("danger");
   }
    if(calculateTheBill(billStringElement.value) >=20 && calculateTheBill(billStringElement.value)< 30){
       billTotalElementTime.classList.remove("danger");
       billTotalElementTime.classList.add("warning");
    }
    }
    calculateBtnElement.addEventListener("click", billCalculation);

