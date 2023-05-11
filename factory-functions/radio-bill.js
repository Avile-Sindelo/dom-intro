function RadioBill(){
    var radioCallCost = 2.75;
    var radioSmsCost = 0.75;
    var radioCallTotal = 0;
    var radioSmsTotal = 0;

    var radioTotalCost = 0;
    
    //Setters
    function radioCall(){
        radioCallTotal += radioCallCost;
        radioTotalCost += radioCallCost;
    }

    function radioSms(){
        radioSmsTotal += radioSmsCost;
        radioTotalCost += radioSmsCost;
    }

    function getClassName(){
        if(radioTotalCost >= 30){
            return 'warning';
        }

        if(radioTotalCost >= 50){
            return 'danger';
        }
        
    }

    function getRadioTotal(){
        return radioTotalCost;
    }

    //Getters
    function getRadioCallCost(){
        return radioCallCost;
    }

    function getRadioSmsCost(){
        return radioSmsCost;
    }

    return {
        getRadioCallCost,
        getRadioSmsCost,
        radioCall,
        radioSms,
        getClassName,
        getRadioTotal
    }
}