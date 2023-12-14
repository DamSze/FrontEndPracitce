const rows = document.querySelectorAll(".questions-row-container");
const content = document.querySelectorAll(".questions p");

console.log(rows);
let p_display = "none";


content.forEach(element =>{
    element.style.display = "none";
})

rows.forEach(row => {
    const content = row.querySelector("p");
    row.addEventListener('click', () =>{
        content.style.display=="none" ? p_display = "block" : p_display = "none";
        content.style.display = p_display;
        console.log("cfasd")
    });

});

// rows.addEventListener('click', console.log("clicked"))