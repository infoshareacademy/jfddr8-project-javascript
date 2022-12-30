// dać w html max ilość kolumn i rzędów
//createTextNode do punktu 3go

const rows = document.getElementById("rows");
const cols = document.getElementById("cols");
const generate = document.getElementById("generate");
const tableContainer = document.getElementById("table");

const addTable = (event) => {
  event.preventDefault();
  let tableRow;

  for (let iRow = 1; iRow <= rows.value; iRow++) {
    tableRow = document.createElement("tr");
    tableContainer.appendChild(tableRow);

    for (let iCol = 1; iCol <= cols.value; iCol++) {
      let tableCol = document.createElement("td");
      tableCol.textContent = "cell in row" + iRow + ",column" + iCol;
      tableRow.style.backgroundColor = "yellow";
      tableRow.append(tableCol);
      tableCol.style.border = "2px solid black";
    }
  }

  console.log(tableRow);
};

generate.addEventListener("click", addTable);
