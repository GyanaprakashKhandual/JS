const buttons = document.querySelectorAll('.color-btn');
const body = document.querySelector("body");

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = "grey";
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow";
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = "white";
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = "red";
        }
    })
})