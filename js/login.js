document.getElementById("login-btn").addEventListener("click", function(){
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    
    console.log(contactNumber); 
    const pinInput =document.getElementById("input-pin")
    const pin= pinInput.value;
     console.log(pin);
     if(contactNumber=="01767916141" && pin=="84333"){
        alert("login success");
        window.location.assign("/home.html")
     }else{
        alert("login failed")
        return;
     }
    
});