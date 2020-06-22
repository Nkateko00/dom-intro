 
 function billCalculation(){
    var emptyString = "";
    var fullBill;
    var theWarningLevel = 20;
    var theCriticalLevel = 30;
function calculateTheBill(billStringValue){
   var billList = billStringValue.split(",");
    fullBill = 0;
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
function setString(item){
   emptyString = item ;

}
function testLevel(){
    if(fullBill>=theWarningLevel && fullBill<CriticalLevel){
       return "warning";
    }else if(fullBill>=theCriticalLevel){
       return "danger";
    }
}
function getTotal(){
   return fullBill
   //create a function which returns the total
}
return { 
   calculateTheBill,
   testLevel,
   setString,
   getTotal
}
}
 