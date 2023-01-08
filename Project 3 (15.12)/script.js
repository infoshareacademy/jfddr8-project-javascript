const rowInput = document.querySelector('.row');
const collumnInput = document.querySelector('.collumn');
const button = document.querySelector('.button');
const table = document.querySelector('.mainTable');

const displayTable = () => {
    table.innerHTML = "";
    const rowNumber = rowInput.value;
    const collumnNumber = collumnInput.value;
    for (let i=0; i<rowNumber; i++){
        const row = document.createElement("tr");
        for(let n=0; n < collumnNumber; n++){
            const cell = document.createElement("td");
            // cell.innerText = ""
            const text = document.createTextNode(`${"CN:"} ${n+ 1} ${"RN:"} ${i + 1}`);
            cell.appendChild(text)
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    const changeColor = document.querySelectorAll('td') 
    changeColor.forEach(el => el.addEventListener('click', () => { 
        el.style.background === "yellow" ? el.style.background = "transparent" : el.style.background = "yellow";
        // if(el.style.background === 'yellow'){
        //     el.style.background = 'transparent'
        // } else{
        //     el.style.background = 'yellow'
        // } 
    }))
};

button.addEventListener('click', displayTable);