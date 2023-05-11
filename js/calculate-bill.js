//get a reference to the calculate button
const calculateButton = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
let billTotalElement = document.querySelector('.billTotal');
//get a reference to the billString
const billStringElement = document.querySelector('.billString'); 

//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    //  * this function should read the string value entered - split it on a comma.
    const billString = billStringElement.value;
    //Make a list of bill items using from the string
    const billItems = billString.split(",");
    // a variable for the total phone bill.
    let billTotal = 0;
    //  * loop over all the entries in the resulting list
    for (let i = 0; i < billItems.length; i++){
        //  * check if it is a call or an sms and add the right amount to the overall total
        let billItem = billItems[i].trim();
        if (billItem === "call" || billItem === "CALL"){
            billTotal += 2.75;
        }
        else if (billItem === "sms" || billItem === "SMS"){
            billTotal += 0.75;
        }
    }
    
    //  * once done looping over all the entries - display the total onto the screen in the billTotal element
    let roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    
    //Normal style for total less than or equal to R20
    if(parseFloat(roundedBillTotal) <= 20){
        //Remove the warning class
        billTotalElement.classList.replace('warning', 'normal');
        //Remove the Danger class
        billTotalElement.classList.remove('danger');
        document.querySelector('.total').classList.replace('warning', 'normal');
    }

    // //Warning level style
    if(parseFloat(roundedBillTotal) > 20){
        billTotalElement.classList.remove('danger');
        billTotalElement.classList.remove('normal')
        billTotalElement.classList.add('warning');
       
    } 
    //Danger style
    if(parseFloat(roundedBillTotal) > 30){
        //danger
        billTotalElement.classList.remove('warning');
        billTotalElement.classList.add('danger');

    }
}

//link the function to a click event on the calculate button

calculateButton.addEventListener('click', calculateBtnClicked);

