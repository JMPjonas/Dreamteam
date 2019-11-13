// 
    var username = document.forms["vform"]["username"];
    var email = document.forms["vform"]["email"];
    var password = document.forms["vform"]["password"];
    var password_confirmation = document.forms["vform"]["password_confirmation"];
    
// error display
    var name_error = document.getElementById("name_error");
    var email_error = document.getElementById("email_error");
    var password_error = document.getElementById("password_error");

// setting event listeners
    username.addEventListener("blur", nameVerify, true); 
    email.addEventListener("blur", emailVerify, true);
    password.addEventListener("blur", passwordVerify, true);
    
// validate
    function Validate(){
        if (username.value == ""){
            username.style.border = "none";
            name_error.textContent = "Navn er påkrævet";
            username.focus();
            return false;  
        }
        if (email.value == ""){
            email.style.border = "none";
            email.paddingLeft = "1px;"
            email_error.textContent = "Email er påkrævet";
            email.focus();
            return false;  
        }

        
     if (password.value == ""){
            password.style.border = "none";
            password.paddingLeft = "1px;"
            password_error.textContent = "Adgangskode er påkrævet";
            password.focus();
            return false;  
        }  
        
// tjek om adgangskoderne er ens
     if (password.value != password_confirmation.value) {
         password.style.border = "none";
         password.paddingLeft = "1px;"
         password_confirmation.style.border = "none";
         password_error.innerHTML = "De to adgangskoder matcher ikke";
         return false; 
     }
        
}

// event handler functions
function nameVerify(){
            if (username.value != "") {
                username.style.border = "none";
                name_error.innerHTML = "";
                return true;
            }
        }
        
function emailVerify(){
            if (email.value != "") {
                email.style.border = "none";
                email_error.innerHTML = "";
                return true;
            }
        }


function passwordVerify(){
            if (password.value != "") {
                password.style.border = "none";
                password_error.innerHTML = "";
                return true;
            }
        }