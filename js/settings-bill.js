// get references to all the settings fields
const callCostSettingsElement = document.querySelector(".callCostSetting");
const smsCostSettingsElement = document.querySelector(".smsCostSetting");
const warningLevelElement = document.querySelector(".warningLevel");
const criticalLevelElement = document.querySelector(".criticalLevel");
//references to the Totals
const callTotalElement = document.querySelector(".callTotalSettings");
const smsTotalElement = document.querySelector(".smsTotalsSettings");
const totalElement =document.querySelector("totalSettings");
//get a reference to the add button
const myAddBtn = document.querySelector(".addBillBtn");
//get a reference to the 'Update settings' button
const myUpdateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var totalCostSettings = 0;
var totalSmsSetting = 0;
var totalWarningLevel =0;
var totalCriticalLevel =0;
// create a variables that will keep track of all three totals.
var callTotals = 0;
var smsTotals = 0
var totalSetting =0;
function settingsBill(){
    totalCostSettings = Number(callCostSettingsElement.value);
    totalSmsSetting =  Number(smsCostSettingsElement.value);
    totalWarningLevel= Number(warningLevelElement.value);
    totalCriticalLevel = Number(criticalLevelElement.value);

    forColor(totalSettings, totalWarningLevel, totalCriticalLevel);
    
}
//add an event listener for when the 'Update settings' button is pressed

function totalSettings(){
    var billTypeRadioCheck = document.querySelector("input[name ='billItemTypeWithSettings']:checked");    
    var getBillType = billTypeRadioCheck.value;
    if(getBillType==="call"){
        callTotals += totalCostSettings;
        totalSetting+= totalCostSettings;
    }
    else if(getBillType === "sms"){
        smsTotals += totalSmsSetting;
        totalSetting += totalSmsSetting;
    }
    innerScript();
}
function forColor(fullTotal,latestWarning,latestDanger){
    totalElement.classList.remove("danger");
    totalElement.classList.remove("warning");
    if(fullTotal >= latestWarning && fullTotal<latestDanger){
        totalElement.classList.add("warning");
    }else if(fullTotal>=latestDanger){
        totalElement.classList.add("danger");
    }
}

function innerScript(){
    forColor(totalSettings, totalWarningLevel, totalCriticalLevel);
    callTotalElement.innerHTML = callTotals.toFixed(2);
    smsTotalElement.innerHTML = smsTotals.toFixed(2);
    totalElement.innerHTML = totalSetting.toFixed(2);

}
myAddBtn.addEventListener("click",totalSettings);
myUpdateSettingsBtn.addEventListener("click",settingsBill);

//add an event listener for when the add button is pressed


// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
