// dać w html max ilość kolumn i rzędów
//createTextNode do punktu 3go

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const generateBtn = document.getElementById("generate");
let tableContainer = document.getElementById("table");

let tableRow;
let tableCol;

const addTable = (event) => {
  event.preventDefault();
  tableContainer.innerHTML = '<table id="table"></table>';

  for (let iRow = 1; iRow <= rowsInput.value; iRow++) {
    tableRow = document.createElement("tr");
    a = tableContainer.appendChild(tableRow);

    for (let iCol = 1; iCol <= colsInput.value; iCol++) {
      let tableCol = document.createElement("td");
      tableCol.textContent = "cell in row" + iRow + ",column" + iCol;
      tableCol.style.cursor = "pointer";
      tableRow.append(tableCol);
      tableCol.style.border = "2px solid black";
    }
  }
};

const checkNumber = (event) => {
  const alert = document.querySelector("aside");
  alert.style.color = "red";
  alert.innerText = "";
  if (rowsInput.value < 0 || colsInput.value < 0) {
    alert.innerText = "Incorrect number. Enter a positive value!";
  } else if (rowsInput.value > 100 || colsInput.value > 100) {
    alert.innerText = "Please, enter a number that is less than 100";
    event.stopImmediatePropagation();
  }
};

const changeColor = (singleCell) => {
  const cell = singleCell.target;

  if (cell.classList == "tdClicked") {
    cell.classList.add("tdNotClicked");
    cell.classList.remove("tdClicked");
  } else if (cell.classList == "tdNotClicked") {
    cell.classList.add("tdClicked");
    cell.classList.remove("tdNotClicked");
  } else {
    cell.classList.add("tdClicked");
  }
};

generateBtn.addEventListener("click", checkNumber);
generateBtn.addEventListener("click", addTable);
tableContainer.addEventListener("click", changeColor);
