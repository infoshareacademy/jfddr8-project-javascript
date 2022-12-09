const darkMode = document.querySelector('.btnDark');
const lightMode = document.querySelector('.btnLight');
const body = document.querySelector('body');
const changeToDarkMode = () => {
    body.classList.remove('lightActive');
    body.classList.add('darkActive');   
    darkMode.classList.remove('btnLight');
    darkMode.classList.add('btnDark');
    lightMode.classList.remove('btnLight');
    lightMode.classList.add('btnDark');
}
const changeToLightMode = () => {
    body.classList.remove('darkActive');
    body.classList.add('lightActive');   
    darkMode.classList.remove('btnDark');
    darkMode.classList.add('btnLight');
    lightMode.classList.remove('btnDark');
    lightMode.classList.add('btnLight');
}


darkMode.addEventListener('click', changeToDarkMode );
lightMode.addEventListener('click', changeToLightMode );



