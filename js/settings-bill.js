/** ************* PSUEDOCODE ******************
 * 
 * Get a reference to the call radio button
 * Get a reference to the sms radio button
 * Get a reference the the Add button
 * 
 * Get a reference to the SMS total
 * Get a reference to the call total
 * Get a reference to the Global total
 * 
 * Get a reference to the call cost input element
 * Get a reference to the sms cost input element
 * Get a reference to the Warning level input element
 * Get a reference to the Critical level input element
 * Get the reference to the Update Settings button
 * 
 * Create a 'additional cost' varible to hold the cost of either a call or an sms
 * Create a variable to hold the total cost
 * 
 * Create a function to calculate the total cost
 *     IF the Call radio button is checked, 
 *          Make the 'additional cost' variable the call cost
 *          Add the Additional-cost to the call total
 *          Add the Additional-cost to the global total
 *          Display the call total
 *          Display the global total
 *      ELSE IF the SMS radio button  is checked
 *          Make the additional-cost the variable the SMS cost from settings
 *          Add the additional cost variable to the sms total
 *          Add the the additional cost variable to the Global total
 *          Display the SMS total
 *          Display the CALL total
 *       ELSE no radio button seclected 
 *             Add nothing to the totals
 * 
 *     IF global total exceeds WARNING level
 *          Add the warning class
 *      
 *     IF global total exceeds CRITICAL level
 *          Add the Danger class
 * 
 */


//              start of DOM
//              BUTTONS
// get a reference to the call radio button
const callRadioElement = document.querySelector('#call-radio');
//get a reference to the sms radio button
const smsRadioElement = document.querySelector('#sms-radio');
//get a reference to the add button
const btnAdd = document.querySelector('#radioSettingsAddBtn');
//              TOTALS
//get a reference to the call total
const callTotalSettings = document.querySelector('.callTotalSettings');

//get a reference to the sms total
const smsTotalSettings = document.querySelector('.smsTotalSettings');

//get a reference to the global total
const globalTotalSettings = document.querySelector('.totalSettings');
//              INPUTS
// get refences to the call cost input
const callCost = document.querySelector('.callCostSetting');
//get a reference to the sms input
const smsCost = document.querySelector('.smsCostSetting');

//get a reference to the warning level input
const warningLevel = document.querySelector('.warningLevelSetting');

//get a reference to the warning level input
const criticalLevel = document.querySelector('.criticalLevelSetting');

//              UPDATE BUTTON
//get a reference to the Update button
const updateBtn = document.querySelector('.updateSettings');

            // End of DOM

const instance = BillWithSettings();
instance.setCallCost(3);
instance.setSmsCost(1);
instance.setWarningLevel(10);
instance.setCriticalLevel(20);

//add an event listener for when the add button is pressed
btnAdd.addEventListener('click', ()=>{
    //if the call radio button is checked;
    if(callRadioElement.checked){
        // //Display the Global total
        instance.makeCall();
        callTotalSettings.innerHTML = instance.getTotalCallCost().toFixed(2);
        globalTotalSettings.innerHTML = instance.getGrandTotal().toFixed(2);

    } else if(smsRadioElement.checked){
        
        //Display the Sms total
        instance.sendSms();
        smsTotalSettings.innerHTML = instance.getTotalSmsCost().toFixed(2);
        //Display the Global total
        globalTotalSettings.innerHTML = instance.getGrandTotal().toFixed(2);
    }

//              WARNING LEVEL
    if(instance.getGrandTotal() >= instance.getWarningLevel()){
        //Add the Warning class
        globalTotalSettings.classList.add(instance.getClassName());
    }

//              CRITICAL LEVEL
if(instance.getGrandTotal() >= instance.getCriticalLevel()){
    //Add the Danger class
    globalTotalSettings.classList.add(instance.getClassName());
    
}

});

//              UDPATE SETTINGS

updateBtn.addEventListener('click', ()=>{
    //update the warning level and critical level
    if(parseFloat(criticalLevel.value) > instance.getGrandTotal()){        
        
        if(instance.getGrandTotal() >= parseFloat(warningLevel.value)){
            //Make sure the Danger class is removed
            globalTotalSettings.classList.remove('danger');
            //Add the Warning class in this range
            globalTotalSettings.classList.add('warning');
        } else {
            //Remove the classes
            globalTotalSettings.classList.remove('warning');
            globalTotalSettings.classList.remove('danger');
        }

        instance.setCriticalLevel(parseFloat(criticalLevel.value));
        
        //Update the call cost if a new value has been provided
        if(callCost.value){
            instance.setCallCost(parseFloat(callCost.value));
        }

        //Update the sms cost if a new value has been provided
        if(smsCost.value){
            instance.setSmsCost(parseFloat(smsCost.value));
        }

    }
    
});