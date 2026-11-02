function getValueFromInput(id){
    const input = document.getElementById(id);
    const value= input.value;
    return value;
} 

function getBlance(){
    const blanceElement = document.getElementById("blance");
    const blance = blanceElement.innerText;
    return Number(blance);
}

function setBlance(value){
    const blanceElement = document.getElementById("blance");
    blanceElement.innerText=value;
} 

 function showOnly(id){
    const addmoney= document.getElementById("add-money");
    const cashout = document.getElementById("Cashout");
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    const selected= document.getElementById(id);
    selected.classList.remove("hidden");

 }