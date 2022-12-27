function Stoper() 
{   let tens=0
const buttonStart=document.getElementById('button-start') 
const buttonReset=document.getElementById('button-reset')
const buttonStop=document.getElementById('button-stop')
let Interval;

buttonstart()
{ 
buttonStart=setInterval(Stoper(),10);
tens++;
}
buttonstop()
{
buttonStop=clearInterval();
}
buttonReset()
{
    buttonReset=tens;
}

}