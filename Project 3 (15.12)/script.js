function createTable() {  
    const row = document.getElementById("row").value;
    const col = document.getElementById("col").value;
    const table = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    for (let r=1; r < row; r++) {
      const row = document.createElement("tr");
  
      for(let c=1; c < col; c++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${r}, column ${c}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    table.appendChild(tblBody);
    document.body.appendChild(table);
    table.setAttribute("border", "2");

    const targetCells = document.querySelectorAll("td");
    targetCells.forEach((element) =>
    element.addEventListener("click", () => {
    element.style.background === "yellow" ? element.style.background = "transparent" : element.style.background = "yellow"
    })
  );
}

