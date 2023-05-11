function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var theTotalCallCost = 0;
    var theTotalSmsCost = 0;
    var grandTotal = 0;
    var activeClass = '';

    //setters
    function setCallCost(callCost){
        theCallCost = callCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function makeCall(){  
        if(grandTotal <= theCriticalLevel){
            //Update the total for calls
            theTotalCallCost += theCallCost;
            //Update the grand total
            grandTotal += theCallCost;
        }  
        
        //If the grand total is greater than or equal to the warning level
        if(grandTotal >= theWarningLevel){
            //Make WARNING the active class
            activeClass = 'warning';
        }
        
        //If the grand total is greater than or equal to the critical level
        if(grandTotal >= theCriticalLevel){
            //Make DANGER the active class
            activeClass = 'danger';
        }
                 
    }

    function sendSms(){
        if(grandTotal <= theCriticalLevel){
            theTotalSmsCost += theSmsCost;
            grandTotal += theSmsCost;
        }
       
        //If the grand total is greater than or equal to the warning level
        if(grandTotal >= theWarningLevel){
            //Make WARNING the active class
            activeClass = 'warning';
        }
        
        //If the grand total is greater than or equal to the critical level
        if(grandTotal >= theCriticalLevel){
            //Make DANGER the active class
            activeClass = 'danger';
        }
        
    }

    //getters
    function getCallCost(){
        return theCallCost;
    }

    function getSmsCost(){
        return theSmsCost;
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function getTotalCallCost(){
        return theTotalCallCost;
    }

    function getTotalSmsCost(){
        return theTotalSmsCost;
    }

    function getClassName(){
        return activeClass;
    }

    function getGrandTotal(){
        return grandTotal;
    }

    //exposure
    return {
        getCallCost,
        getSmsCost,
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getWarningLevel,
        getCriticalLevel,
        makeCall,
        getTotalCallCost,
        sendSms,
        getTotalSmsCost,
        getClassName,
        getGrandTotal
    }
}