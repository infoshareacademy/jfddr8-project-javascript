function Stoper() 
{   let tens=0
const buttonStart=document.getElementById('button-start') 
const buttonReset=document.getElementById('button-reset')
const buttonStop=document.getElementById('button-stop')
let Interval;

buttonStart.onlick=function()
{
Interval=setInterval(startTimer,10)
}
function startTimer()
{
tens++
}

}