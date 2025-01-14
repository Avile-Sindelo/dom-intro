/***
 ************ PSUEDOCODE ***************
 1. Get a reference to the call radio button
 2. Get a reference to the sms radio button
 3. Get reference to the add button
 4. Create a variable for the new costs
 5. Attach an event listener to the add button
    6. If the call radio button is checked
         Update the call total
         Update the global total
         Display the totals on the UI

    7. If the sms radio button is checked
         Update the sms total
         Update the global total
         Display the totals on the UI

 8. Add the WARNING and DANGER classes as the limits allow

    *********** THE END ****************
*/


// get a reference to the sms or call radio buttons
const callRadio = document.querySelector('#callRadio');
const smsRadio = document.querySelector('#smsRadio');

//get a reference to the add button
const addButton = document.querySelector('.radioBillAddBtn');
//Get reference to the CALL total element
const callTotalElement = document.querySelector('.callTotalTwo');

//Get reference to the SMS total element
const smsTotalElement = document.querySelector('.smsTotalTwo');

//Get reference to the gloabal total element
const globalTotalElement = document.querySelector('.totalTwo');

//create a variable that will keep track of the total bill
let additionalBill = 0;
let callTotalCost = 0;
let smsTotalCost = 0;
let globalTotalCost = 0;
//add an event listener for when the add button is pressed
addButton.addEventListener('click', function(){
    if(callRadio.checked){
          //The additional bill for each call 
          additionalBill = 2.75;
          //Update the call total
          callTotalCost = parseFloat(callTotalElement.innerHTML) + additionalBill;
          callTotalElement.innerHTML = callTotalCost.toFixed(2); 
          
          //Update the global total
          globalTotalCost = parseFloat(globalTotalElement.innerHTML) + additionalBill;
          globalTotalElement.innerHTML = globalTotalCost.toFixed(2); 
    } else if(smsRadio.checked){ 
          //The additional bill for each SMS
          additionalBill = 0.75;
          //Update the SMS total
          
          smsTotalCost = parseFloat(smsTotalElement.innerHTML) + additionalBill;
          smsTotalElement.innerHTML = smsTotalCost.toFixed(2); 
          //Update the global total
          globalTotalCost = parseFloat(globalTotalElement.innerHTML) + additionalBill;
          globalTotalElement.innerHTML = globalTotalCost.toFixed(2);
     }

     //Warning styles
     if(parseFloat(globalTotalElement.innerHTML) > 30){
          //warning
          globalTotalElement.classList.add('warning');
     }

     //Danger styles
     if(parseFloat(globalTotalElement.innerHTML) > 50){
          //danger
          globalTotalElement.classList.add('danger');
     }
});


