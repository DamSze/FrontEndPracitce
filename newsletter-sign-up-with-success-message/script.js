const email_input = document.querySelector(".email-input input");
const button = document.querySelector(".button-subscribe");
const error_msg = document.getElementById("error-message");

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

const changeValidationColor = () => {
    if(validateEmail(email_input.value)){
        hideError();
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

const showError = ()=>{
    email_input.classList.add("incorrect-email");
    email_input.classList.remove("correct-email");
    error_msg.style.display = "inline-block";
}

const hideError = ()=>{
    email_input.classList.add("correct-email")
    email_input.classList.remove("incorrect-email")
    error_msg.style.display = "none";
}