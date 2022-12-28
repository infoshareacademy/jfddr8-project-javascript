const darkModeButton = document.querySelector(".btnDark");
const lightModeButton = document.querySelector(".btnLight");

darkModeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    darkModeButton.style.color = "white";
    darkModeButton.style.borderColor = "white";
    lightModeButton.style.color = "white";
    lightModeButton.style.borderColor = "white";
});

lightModeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    darkModeButton.style.color = "black";
    darkModeButton.style.borderColor = "black";
    lightModeButton.style.color = "black";
    lightModeButton.style.borderColor = "black";
});

