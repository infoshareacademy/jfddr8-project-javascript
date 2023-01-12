
function createTable() {
    
    const row = document.getElementById("row").value;
    const col = document.getElementById("col").value;
    const table = document.querySelector("table");
    table.innerHTML=""; 
  
    for (let r=0; r < row; r++) {
      const row = document.createElement("tr");
  
      for(let c=0; c < col; c++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${r + 1} , column ${c + 1} `);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    table.setAttribute("border", "2");

    const targetCells = document.querySelectorAll("td");
    targetCells.forEach((element) =>
    element.addEventListener("click", () => {
    element.style.background === "yellow" ? element.style.background = "transparent" : element.style.background = "yellow"
    })
  );
}

