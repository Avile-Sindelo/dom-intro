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


// create a variable that will keep track of the additional cost
let newAdditionalCost = 0;
let totalCost = 0;
let globalTotal = 0;

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
btnAdd.addEventListener('click', ()=>{
    //if the call radio button is checked;
    if(callRadioElement.checked){
        //Make the entered call cost the additional cost
        newAdditionalCost = callCost.value;
        
        //Convert the call total and the additional cost to numbers, sum them up and make that the call total 
        totalCost = parseFloat(callTotalSettings.innerHTML) + parseFloat(newAdditionalCost);
       
        //Convert the global total and the additional cost to numbers, sum them up and assign their sum to the global cost variable
        globalTotal =  parseFloat(globalTotalSettings.innerHTML) + parseFloat(newAdditionalCost);
       
        //Display the Call total
        callTotalSettings.innerHTML = totalCost.toFixed(2);
        //Display the Global total
        globalTotalSettings.innerHTML = globalTotal.toFixed(2);

    } else if(smsRadioElement.checked){
        //Make the entered sms cost the additional cost
        newAdditionalCost = smsCost.value;
        //Convert the sms total and the additional cost to numbers, sum them up and make that the call total 
        totalCost = parseFloat(smsTotalSettings.innerHTML) + parseFloat(newAdditionalCost);

        //Convert the global total and the additional cost to numbers, sum them up and assign their sum to the global cost variable
        globalTotal =  parseFloat(globalTotalSettings.innerHTML) + parseFloat(newAdditionalCost);
        
        //Display the Sms total
        smsTotalSettings.innerHTML = totalCost.toFixed(2);
        //Display the Global total
        globalTotalSettings.innerHTML = globalTotal.toFixed(2);
    }

//              WARNING LEVEL
    if(globalTotal > parseFloat(warningLevel.value)){
        //Add the Warning class
        globalTotalSettings.classList.add('warning');
    }

//              CRITICAL LEVEL
if(globalTotal > parseFloat(criticalLevel.value)){
    //Add the Danger class
    globalTotalSettings.classList.add('danger');
    //disable the ADD button
    btnAdd.disabled = true;
}

});

//              UDPATE SETTINGS

updateBtn.addEventListener('click', ()=>{
    //update the warning level and critical level
    if(parseFloat(warningLevel.value) > globalTotal  && parseFloat(criticalLevel.value) > parseFloat(warningLevel.value)){
        //Remove the class
        globalTotalSettings.classList.remove('warning');
        globalTotalSettings.classList.remove('danger');
        //Restore ADD button functionality
        btnAdd.disabled = false;
    }
    
});