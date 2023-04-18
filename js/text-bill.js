/***
 * ******* PSUEDOCODE *******
 * 
 *  1. Get reference to the input element
 *  2. Get reference to the Add button
 *  3. Attach an event listener to the button
 *  4. Create a variable for the new additional cost
 *  5. If the input service is a call
 *      5.1. Get reference to the call total element AND add the new additional cost to the calls total 
 *          Display the new call total on the element
 *      5.2. Get reference to the Global total element AND add the new additional costs to the global total
 *          Display the new global total on the UI
 *          Clear the text field
 * 
 *  6. If the input is an SMS
 *      6.1. Get the reference to the SMS total element AND add the new additional cost to the SMS total
 *          Display the new SMS total on element
 *      6.2. Get reference to the Global total element AND add the new additional costs to the global total
 *          Display the new global total on the UI
 *          Clear the text box
 * 
 * ********* THE END ************
 */


// get a reference to the textbox where the bill type is to be entered
const billTypeElement = document.querySelector('.billTypeText');

//get a reference to the add button
const addBtn = document.querySelector('.addToBillBtn');

//create a variable that will keep track of the additional cost
let additionalCost = 0;

//add an event listener for when the add button is pressed
addBtn.addEventListener('click', function(){
    if(billTypeElement.value == 'call'){
        //Additional cost for each call
        additionalCost = 2.75;
        //Get reference to the CALLS total 
        const callTotal = document.querySelector('.callTotalOne');
        //Convert the string total into a floating point number and add the additional cost
        let updatedCallTotal = parseFloat(callTotal.innerHTML) + additionalCost;
        //Display the updated total on the CALLS total
        document.querySelector('.callTotalOne').innerHTML = updatedCallTotal;
        //Get reference to the global total element
        const globalTotal = document.querySelector('.totalOne');
        //Convert the string value of the global total and add to it the additional cost
        let updatedGlobalTotal = parseFloat(globalTotal.innerHTML) + additionalCost;
        //Display the updated Global total
        document.querySelector('.totalOne').innerHTML = updatedGlobalTotal;
        //Clear the input field
        billTypeElement.value = '';
    } else if(billTypeElement.value == 'sms'){
        //Additional cost for each call
        additionalCost = 0.75;
        //Get reference to the SMS total 
        const smsTotal = document.querySelector('.smsTotalOne');
        //Convert the string total into a floating point number and add the additional cost
        let updatedSmsTotal = parseFloat(smsTotal.innerHTML) + additionalCost;
        //Display the updated total on the CALLS total
        document.querySelector('.smsTotalOne').innerHTML = updatedSmsTotal;
        //Get reference to the global total element
        const globalTotal = document.querySelector('.totalOne');
        //Convert the string value of the global total and add to it the additional cost
        let updatedGlobalTotal = parseFloat(globalTotal.innerHTML) + additionalCost;
        //Display the updated Global total
        document.querySelector('.totalOne').innerHTML = updatedGlobalTotal;
        //Clear the input field
        billTypeElement.value = '';
    }
});

    
