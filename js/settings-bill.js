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
var totalCostSettings = 0;
var totalSmsSetting = 0;
var totalWarningLevel = 0;
var totalCriticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotals = 0;
var smsTotals = 0;
var totalSetting = 0;
function settingsBill() {
    totalCostSettings =  Number(callCostSettingsElement.value);
    totalSmsSetting =   Number(smsCostSettingsElement.value);
    totalWarningLevel = Number(warningLevelElement.value);
    totalCriticalLevel = Number(criticalLevelElement.value);
    forColor(totalSetting, totalWarningLevel, totalCriticalLevel);
}
//add an event listener for when the 'Update settings' button is pressed

function totalSettings() {
    var billTypeRadioCheck = document.querySelector("input[name ='billItemTypeWithSettings']:checked");
    var getBillType = billTypeRadioCheck.value;
        if (billTypeRadioCheck) {
        if (totalSetting < totalCriticalLevel) {
            if (getBillType === "call") {
                callTotals += totalCostSettings;
                totalSetting += totalCostSettings;
              
            }
            else if (getBillType === "sms") {
                smsTotals += totalSmsSetting;
                totalSetting += totalSmsSetting;
                
            }
        }
        
        innerScript();
        forColor(totalSetting, totalWarningLevel, totalCriticalLevel);

    }
}
    function forColor(fullTotal, latestWarning, latestDanger) {
        totalElement.classList.remove("danger");
        totalElement.classList.remove("warning");
        if (fullTotal >= latestWarning && fullTotal < latestDanger) {
            totalElement.classList.add("warning");
        }
        else if (fullTotal >= latestDanger) {
            totalElement.classList.add("danger");
        }
    }

    function innerScript() {
        callTotalElement.innerHTML = callTotals.toFixed(2);
        smsTotalElement.innerHTML = smsTotals.toFixed(2);
        totalElement.innerHTML = totalSetting.toFixed(2);

    }
    myAddBtn.addEventListener("click", totalSettings);
    myUpdateSettingsBtn.addEventListener("click", settingsBill);
