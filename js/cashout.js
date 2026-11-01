document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length!=11){
        alert("Invalid Number")
    }

    const cashoutAmount= getValueFromInput("cashout-amount");
    const currentBlance= getBlance();

    const newBlance= currentBlance- Number(cashoutAmount);
    if( newBlance<0){
        alert("insuficient blance")
        return;
    }

    const pin= getValueFromInput("cashout-pin")
    if(pin==="84333"){
        alert("cashout successful")
        setBlance(newBlance);
    }else{
        alert("invalid pin")
        return;
    }
});