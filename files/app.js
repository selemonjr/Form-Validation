function checkPassword() {
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm").value;
    const icon = document.querySelector(".icon");
    const lock = document.querySelector(".lock");
    const message = document.querySelector(".text");
    const validated = document.querySelector(".tick");
    //Password Validation//
    if(password.length != 0) {
        if(password == confirmPassword) {
            message.textContent = "Successfully Matched!";
            message.style.backgroundColor = "#42ff2f";
        } else {
            message.textContent = "Error! Password don't Match";
            message.style.backgroundColor = "#FF0000";
        }
    } else {
        alert("Password Cannot be empty")
        message.textContent = "";
    };
    //Email Validation//
    function emailValidation() {
        const email = document.querySelector("#email").value;
        const emailLength = document.querySelector("#email");
        const validated = document.querySelector(".tick");
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.length != 0 ) {
            if(email.match(mailFormat) && email.length > 8){
                if(!validated.classList.contains("validation")) {
                    validated.classList.add("validation");
                    emailLength.style.border = "2px solid #42ff2f";
                }
            }
        };
    }
    emailValidation();
};
checkPassword();
//Password visibility//
function show() {
    const password = document.querySelector("#password");
    if(password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    };
};
show();
