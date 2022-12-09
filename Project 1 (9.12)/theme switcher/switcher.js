
const btnDark = document.querySelector(".btnDark");
const btnLight = document.querySelector(".btnLight");
const body = document.querySelector("body");


 
btnDark.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    btnDark.style.color ="white";
    btnDark.style.borderColor ="white";
    btnLight.style.color ="white";
    btnLight.style.borderColor ="white";
});

btnLight.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    btnLight.style.color ="black";
    btnLight.style.borderColor ="black";
    btnDark.style.color ="black";
    btnDark.style.borderColor ="black";
});

