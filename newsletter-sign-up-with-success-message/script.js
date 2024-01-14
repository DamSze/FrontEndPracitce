const email_input = document.querySelector(".email-input input");
const button = document.querySelector(".button-subscribe");
const error_msg = document.getElementById("error-message");
const default_container = document.querySelector(".grid-container");
const success_container = document.querySelector(".success-container");
const email_value_success = document.getElementById("email-value");
const dismiss_btn = document.getElementById("dismiss-btn");

let validation_tried = false;

// TODO ADD ADDING THIS CLASSES FOR SOME SHORT PERIOD OF TIME
email_input.addEventListener('keyup',()=>{
    if(validation_tried){
        changeValidationColor();
    }
})

button.addEventListener('click',()=>{
    validation_tried = true;
    changeValidationColor();
})

dismiss_btn.addEventListener('click',()=>{
    hideSuccess();
})

const changeValidationColor = () => {
    if(validateEmail(email_input.value)){
        hideError();
        showSuccess();
    }else{
        showError();
    }
}

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const showSuccess = ()=>{
    default_container.style.display = "none";
    email_value_success.textContent = email_input.value;
    success_container.style.display = "block";
    email_input.value = "";
}

const hideSuccess = ()=>{
    default_container.style.display = "grid";
    email_value_success.textContent = "";
    success_container.style.display = "none";
    validation_tried=false;
}

const showError = ()=>{
    email_input.classList.add("incorrect-email");
    error_msg.style.display = "inline-block";
}

const hideError = ()=>{
    email_input.classList.remove("incorrect-email")
    error_msg.style.display = "none";
}