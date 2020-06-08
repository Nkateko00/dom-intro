 function billCalculation(){
 function calculateBill(billStringValue){
    var billList = billStringValue.split(",");
    fullBill=0;
    //  * loop over all the entries in the the resulting list
    for(var i =0;i<billList.length;i++){
         var bill = billList[i].trim();
         if(bill==="call"){
             fullBill+=2.75;
         }
         else if(bill==="sms"){
             fullBill+=0.75;
            }
}
 }
function getTotal(){
    return fullBill
    //create a function which returns the total
}
return { 
    calculateBill,getTotal
}
 }
 