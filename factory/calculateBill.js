 function calculateTheBill(billStringValue){
   var billList = billStringValue.split(",");
    var fullBill = 0;
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
return fullBill
}
 