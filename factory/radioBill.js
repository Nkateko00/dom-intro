function theRadioBill() {
    var totalBillCounter = 0;
    var smsTotalCounter = 0;
    var callTotalCounter = 0;
    var theWarningLevel = 30;
    var theCriticalLevel = 50;
    function radioIncrement(radioItemValue) {

        if (radioItemValue === "call") {
            totalBillCounter += 2.75;
            callTotalCounter += 2.75
        }
        else if (radioItemValue === "sms") {
            totalBillCounter += 0.75;
            smsTotalCounter += 0.75;
        }
    }
    function smsTotal() {
        return smsTotalCounter;
    }
    function callTotal() {
        return callTotalCounter;
    }
    function totalBill() {
        return callTotalCounter + smsTotalCounter;

    }

    function showSetColors() {
        if (totalBillCounter >= theWarningLevel && totalBillCounter < theCriticalLevel) {
            return "warning";
        } 
        else if (totalBillCounter >= theCriticalLevel){
            return "danger"; 
    }
}
  

return {
    radioIncrement,
    smsTotal,
    callTotal,
    showSetColors,
    totalBill
}
}