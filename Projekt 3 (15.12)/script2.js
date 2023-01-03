const rowInput = document.getElementById("rows").value;
const columnInput = document.getElementById("columns").value;
const button = document.querySelector(".button");
const table = document.querySelector(".mainTable");

let displayTable = () => {
  table.innerHTML = "";
  const rowNumber = rowInput.value;
  const columnNumber = columnInput.value;
  for (let i = 0; i < rowNumber; i++) {
    const row = document.createElement("tr");
    for (let y = 0; y < columnNumber; y++) {
      const column = document.createElement("td");
      const text2 = document.createTextNode(
        '${"Column Number:"} $(y+1} ${"Row Number:")  ${i+1}'
      );
      cell.appendchild(text2);
      row.appendchild(cell);
    }
    table.appendchild(row);
  }
  // const yellow = document.querySelectorAll("td");
  // targetCells.forEach((element) =>
  //   element.addEventListener("click", () => {
  //     element.style.background = "yellow"
  //       ? (element.style.background = "transparent")
  //       : (element.style.background = "yellow");
  //   })
  // );
};
button.addEventListener("click", displayTable);
