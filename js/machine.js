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