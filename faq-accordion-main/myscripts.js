const rows = document.querySelectorAll(".questions-row-container");
const content = document.querySelectorAll(".questions p");



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
    });

});

// rows.addEventListener('click', console.log("clicked"))