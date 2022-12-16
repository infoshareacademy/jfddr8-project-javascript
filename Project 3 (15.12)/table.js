let table  = document.getElementById("theTable");
console.log(table);
    function gnerateTable() {
        const rows = document.getElementById("rowsNumber").value;
        const columns = document.getElementById("columnsNumber").value;
        console.log(rows);
        console.log(columns);

        for (let i = 0; i <= rows; i++) {
            let newTableRow = document.createElement("tr");
        for (let i = 0; i <= columns; i++) {
            let newTableCell = document.createElement("td");
            newTableRow.appendChild(newTableCell);
        }
        table.appendChild(newTableRow);
        }
    }