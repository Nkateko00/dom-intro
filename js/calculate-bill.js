//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
const billTotalElementTime = document.querySelector(".total");
//create the function that will be called when the calculate button is pressed
var totalBill;
function  calculateBtn(){
    //  * this function should read the string value entered - split it on a comma.
    var billStringValue = billStringElement.value;
    var billList = billStringValue.split(",");
    totalBill=0;
    //  * loop over all the entries in the the resulting list
    for(var i =0;i<billList.length;i++){
         var bill = billList[i].trim();
         if(bill==="call"){
             totalBill+=2.75;
         }
         else if(bill==="sms"){
             totalBill+=0.75;
         } 
        //  console.log(totalBill);
         
     }
     showColors();
     innerText();
     return billTotalElement;

    }
    //  * check if it is a call or an sms and add the right amount to the overall total
    //  * once done looping over all the entries - display the total onto the screen in the billTotal element
    function showColors(){
     billTotalElement.classList.remove("danger");
     billTotalElement.classList.remove("warning");
     console.log(totalBill);

    if(totalBill >=30){
        billTotalElement.classList.add("danger");
    }
    else if(totalBill< 30 && totalBill>=20){
        billTotalElement.classList.add("warning");
    }
    }
    function innerText(){
        billTotalElement.innerHTML = totalBill.toFixed(2);
    }
calculateBtnElement.addEventListener("click",calculateBtn);