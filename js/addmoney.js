document.getElementById("addmoney-btn").addEventListener("click", function(){
     const bankAccount = getValueFromInput("add-money-bank")
      if(bankAccount =="Select a bank"){
        alert("Please Select a Bank");
        return;
    }
    const accno= getValueFromInput("add-money-number");
    if(accno.length!=11){
        alert("Invalid Number")
        return;
    }
    const amount = getValueFromInput("add-money-amount");
    const newBlance = getBlance() + Number(amount);
    const pin= getValueFromInput("add-money-pin")
    if(pin==="84333"){
        alert(`Add money successful from ${bankAccount} at ${new Date()}`)
        setBlance(newBlance);
    }else{
        alert("invalid pin")
        return;
    }
})
