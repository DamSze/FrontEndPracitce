email_input = document.querySelector(".email-input input");
button = document.querySelector(".button-subscribe");

// TODO ADD ADDING THIS CLASSES FOR SOME SHORT PERIOD OF TIME
button.addEventListener('click',()=>{
    if(validateEmail(email_input.value)){
        email_input.classList.add("correct-email")
        email_input.classList.remove("incorrect-email")
    }else{
        email_input.classList.add("incorrect-email");
        email_input.classList.remove("correct-email");
    }
})

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};