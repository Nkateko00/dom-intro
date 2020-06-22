function theBillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    var grandTotal = 0;

    function math(getBillType) {
        if (getBillType === "call") {
            callCostTotal += theCallCost;
            grandTotal += theCallCost;
        } else if (getBillType === "sms") {
            smsCostTotal += theSmsCost;
            grandTotal += theSmsCost;
        }

    }
    function testLevel() {
        if (grandTotal >= theWarningLevel && grandTotal < theCriticalLevel) {
            return "warning";
        }
        else if (grandTotal >= theCriticalLevel) {
            return "danger";

        }

    }

    function setCallCost(callCost) {
        theCallCost = Number(callCost);
        //use the variable (placeholder) created in the factory function
        //taking the value down this allows us to put any value in my test file
    }

    function getCallCost() {
        return theCallCost;
        //this allows us to return the value we have set in the test file
    }

    function setSmsCost(smsCost) {
        theSmsCost = Number(smsCost);
    }

    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel) {
        theWarningLevel = Number(warningLevel);
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = Number(criticalLevel);
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function criticalLevel(){
        /*
        this function returns the point at which the criticalLevel is reached
        This takes into account the grand Total cost which is sms + call line 90
        This also takes into account the  criticalLevel that was returned line 60 && 57
        */
        return getTotalCost() >= getCriticalLevel;
    }
    function makeCall() {
        if (!criticalLevel()) {
            callCostTotal += theCallCost
            //if its we haven't reached the critical level it will keep incrementing if we have it stops
        }
    }
    function makeSms() {
        if (!criticalLevel()) {
             //if its we haven't reached the critical level it will keep incrementing if we have it stops
            smsCostTotal += theSmsCost;
        }
    }
    function getTotalCallCost() {
        return callCostTotal;

    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }
 
    

    return {
        getCallCost,
        setCallCost,
        getSmsCost,
        setSmsCost,
        getWarningLevel,
        setWarningLevel,
        getCriticalLevel,
        setCriticalLevel,
        makeCall,
        makeSms,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        criticalLevel,
        math,
        testLevel
    }
}