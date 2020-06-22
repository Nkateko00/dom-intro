// get references to all the settings fields
const callCostSettingsElement = document.querySelector(".callCostSetting");
const smsCostSettingsElement = document.querySelector(".smsCostSetting");
const warningLevelElement = document.querySelector(".warningLevelSetting");
const criticalLevelElement = document.querySelector(".criticalLevelSetting");
//references to the Totals
const callTotalElement = document.querySelector(".callTotalSettings");
const smsTotalElement = document.querySelector(".smsTotalSettings");
const totalElement = document.querySelector(".totalSettings");
//get a reference to the add button
const myAddBtn = document.querySelector(".addBillBtn");
//get a reference to the 'Update settings' button
const myUpdateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
 var billSettings = theBillWithSettings() ;

function settingsBill() {
    billSettings.setCallCost(callCostSettingsElement.value);
    //billSettings.getCallCost();
    billSettings.setSmsCost(smsCostSettingsElement.value);
    billSettings.setCriticalLevel(criticalLevelElement.value);
    billSettings.setWarningLevel(warningLevelElement.value);
    justColor();

}
//add an event listener for when the 'Update settings' button is pressed 
function totalSettings() {
    var billTypeRadioCheck = document.querySelector("input[name ='billItemTypeWithSettings']:checked");
    var getBillType = billTypeRadioCheck.value;

     billSettings.makeCall();
     billSettings.makeSms();
        callTotalElement.innerHTML = (billSettings.getTotalCallCost()).toFixed(2);
        smsTotalElement.innerHTML = (billSettings.getTotalSmsCost()).toFixed(2);
        totalElement.innerHTML = (billSettings.getTotalCost()).toFixed(2);
        justColor();

    }
function justColor() {
    totalElement.classList.remove("danger");
    totalElement.classList.remove("warning");
    totalElement.classList.add(billSettings.testLevel());


}

myAddBtn.addEventListener("click", totalSettings);
myUpdateSettingsBtn.addEventListener("click", settingsBill);
