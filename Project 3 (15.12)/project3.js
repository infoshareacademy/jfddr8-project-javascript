const rows=document.querySelector('.rows');
const columns=document.querySelector('.columns');
const button=document.querySelector('.button');
const table =document.querySelector('.Table');
let dispalyTable = () =>{
let rownumber = rows.value;
let collumnnumber = columns.value;
for ( let i = 0;i < rownumber;i++)
{const row = document.createElement("tr");}
for (let x=0;x < collumnnumber;x++){

    const cell = document.createElement("td");
    const tekst2 =document.createTextNode(`${"LK:"} ${x+1} ${"LW:"} ${i+1}`);
    cell.appendChild(tekst2);
    rownumber.appendChild(cell);
}
table.appendChild(rownumber)
}

button.addEventListener('click' , dispalyTable)

