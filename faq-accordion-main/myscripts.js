const rows = document.querySelectorAll(".questions-row-container");
const content = document.querySelectorAll(".questions p");
const faq_container = document.querySelector(".faq-container");
const container = document.querySelector(".container");
const upper_half = document.querySelector(".upper-half");
const lower_half = document.querySelector(".lower-half");
const body = document.body;

// TODO add in javascript increasing height of lower part to avoid overflow

content.forEach(element =>{
    element.style.display = "none";
})

rows.forEach(row => {
    const content = row.querySelector("p");
    const plus_minus_image = row.querySelector("img");
    row.addEventListener('click', () =>{
        if(content.style.display=="none"){
            p_display = "block";
            plus_minus_image.src="./assets/images/icon-minus.svg";
        } else{
            p_display = "none";
            plus_minus_image.src="./assets/images/icon-plus.svg";

        } 
        content.style.display = p_display;
        changeLowerHalfSize();
    });

});

let changeLowerHalfSize = () =>{
    let finalContainerheight = 0;
    // const bodyHeight = body.clientHeight;
    const containerHeight = container.clientHeight;
    const upperHalfHeight = upper_half.clientHeight;
    const offsetFromTop = upperHalfHeight*0.7;
    const footerHeight = document.querySelector(".attribution").clientHeight;

    const faqContainerHeight = faq_container.scrollHeight + offsetFromTop;
    if (faqContainerHeight >= containerHeight){
        finalContainerheight = 100*(faqContainerHeight-containerHeight)/containerHeight;
    }
    lower_half.style.height = 70 + finalContainerheight + "%";
    console.log(lower_half.style.height);
}

window.addEventListener('resize', changeLowerHalfSize)
