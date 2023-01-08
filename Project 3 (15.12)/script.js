function generateTable () {
    const table = document.querySelector('table');
    table.innerHTML = '';
    const tblBody = document.createElement('tbody');
    const numberOfRows = document.getElementById('numberOfRows').value;
    const numberOfColumns = document.getElementById('numberOfColumns').value;

    if (numberOfRows < 0 || numberOfColumns < 0) {
        alert('only positive integers');
    } 

    for (let i = 0; i < numberOfRows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < numberOfColumns; j++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(`cell in row ${i + 1}, column ${j + 1}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        
    tblBody.appendChild(row);
}

table.appendChild(tblBody);

const tableCell = document.querySelectorAll('td');
tableCell.forEach((cell) => cell.addEventListener('click',() => {
    cell.style.backgroundColor === 'orange' ? cell.style.backgroundColor = 'transparent' : cell.style.backgroundColor = 'orange';
    }))
}


