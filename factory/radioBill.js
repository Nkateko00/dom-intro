function theRadioBill() {
    var totalBillCounter = 0;
    var smsTotalCounter = 0;
    var callTotalCounter = 0;
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

    return {
        radioIncrement,
        smsTotal,
        callTotal,
        totalBill
    }
}