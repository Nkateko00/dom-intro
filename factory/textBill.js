function theTextBill() {
    var fullTotalBill = 0;
    var smsBill = 0;
    var callBill = 0
    var theWarningLevel = 30;
    var theCriticalLevel = 50;
    function textBill(inputType) {
        if (inputType === "call") {
            fullTotalBill += 2.75;
            callBill += 2.75;
        }
        else if (inputType === "sms") {
            fullTotalBill += 0.75;
            smsBill += 0.75;
        }

    }
    function smsTotal() {
        return smsBill;
    }
    function callTotal() {
        return callBill;
    }
    function totalBill() {
        return smsBill + callBill;
    }
    function showColor() {
        if (fullTotalBill >= theWarningLevel && fullTotalBill < theCriticalLevel) {
            return "warning";
        }
        else if (fullTotalBill >= theCriticalLevel) {
            return "danger";
        }
    }
    return {
        textBill,
        smsTotal,
        callTotal,
        callTotal,
        showColor,
        totalBill
    }
}