// get a reference to the textbox where the bill type is to be entered
const billTypeElement = document.querySelector('.billTypeText');

//get a reference to the add button
const addBtn = document.querySelector('.addToBillBtn');

//create a variable that will keep track of the total bill
let totalBill = 0;

let callTotal = document.querySelector('.callTotalOne').innerHTML;
let smsTotal = document.querySelector('.smsTotalOne').innerHTML;

//add an event listener for when the add button is pressed
addBtn.addEventListener('click', function(){
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
    if(billTypeElement.value == 'sms'){
        // * add the appropriate value to the running total
        totalBill += 0.75;
        smsTotal += totalBill;
    } else if(billTypeElement.value == 'call'){
        totalBill += 2.75;
        callTotal += totalBill;
    } else {
        // * add nothing for invalid values that is not 'call' or 'sms'.
        totalBill += 0;
    }


    // * display the latest total on the screen
    
    
});