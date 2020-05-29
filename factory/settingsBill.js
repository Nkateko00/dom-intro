function theBillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal =0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
        //use the variable (placeholder) created in the factory function
        //taking the value down this allows us to put any value in my test file
    }

    function getCallCost() {
        return theCallCost;
        //this allows us to return the value we have set in the test file
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }
    function getWarningLevel(){
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel(){
        return theCriticalLevel;
    }
    function makeCall(){
        callCostTotal+= theCallCost
        //making the total cost variable equal + the call cost variable

    }
    function makeSms(){
        smsCostTotal += theSmsCost;

    }
    function getTotalCallCost(){
        return callCostTotal;

    }
    function getTotalSmsCost(){
        return smsCostTotal;
    }
    function getTotalCost(){
        return callCostTotal+ smsCostTotal;
    }
    function theClassName(){
        if(getTotalCost() >= getWarningLevel()){
            return "warning";
        }
        else if(getTotalCost()>=getCriticalLevel() && getTotalCost >= getWarningLevel){
            return "critical";
        }
    }
    
    return {
        getCallCost,setCallCost,
        getSmsCost,setSmsCost,
        getWarningLevel,setWarningLevel,
        getCriticalLevel,setCriticalLevel,
        makeCall,makeSms,
        getTotalCallCost,getTotalSmsCost,
        getTotalCost,theClassName
    }
}