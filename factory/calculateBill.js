 function billCalculation(){
 function calculateBill(billStringValue){
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
     return totalBill;
}
return { 
    calculateBill
}
 }

