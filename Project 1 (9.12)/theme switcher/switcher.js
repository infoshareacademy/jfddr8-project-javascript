const btnDark = document.querySelector(".btnDark");
const btnLight = document.querySelector(".btnLight");
const body = document.querySelector("body");

function dark (){
    body.classList.add('darkMode')
    btnDark.classList.add('border')
    btnLight.classList.add('border')
}
function light (){
    body.classList.remove('darkMode')
    btnDark.classList.remove('border')
    btnLight.classList.remove('border')
}
btnDark.addEventListener('click', dark)
btnLight.addEventListener('click', light)
