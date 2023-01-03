const button = document.querySelector(".button");

function TABELAWYSWIETLANA() {
  // robimy w środku żeby dla kazdego razu przy wykonaniu funkcji byly przypisane zmienne
  let rs = document.getElementById("rows").value;
  let cs = document.getElementById("columns").value;
  const table = document.querySelector(".mainTable");

  // poniższy kod mówi, nam o zerowaniu się tabli jako stan początkowy ""-nic nie będzie
  table.innerHTML = "";
  // warunkujmy, że wpisane wartosci musza być wieksze od 0
  if (rs < 0 || cs < 0) {
    alert("przyjmujemy jedynie wartosci dodatne");
  } else {
    for (let i = 0; i < rs; i++) {
      // tworzenie rows -tr( tabel row)
      let NEWROW = document.createElement("tr");

      for (let y = 0; y < cs; y++) {
        // tworzenie columns -td( tabel colum)
        let NEWCOLUMN = document.createElement("td");
        // dodaje dziecko do tr ktora jest td(NEWCOLUMN)
        NEWROW.appendChild(NEWCOLUMN);
        //   przypisujemy do kolumny tekst jako dziecko elelementu + tworzymy text
        //   przy pomocy document.createTextNode
        NEWCOLUMN.appendChild(
          document.createTextNode("cell in row" + i + ", column" + y)
        );
      }
      //   przypisujemy tr do tablicy (tablica-> tr NEW ROW -> ts NEWCOLUMN)
      table.appendChild(NEWROW);
    }
    let targetCells = document.querySelectorAll("td");
    targetCells.forEach((KOMORKAwTABELI) =>
      KOMORKAwTABELI.addEventListener("click", () => {
        KOMORKAwTABELI.style.background === "yellow"
          ? (KOMORKAwTABELI.style.background = "transparent")
          : (KOMORKAwTABELI.style.background = "yellow");
      })
    );
  }
}
// uruchamianie po clicku w button
button.addEventListener("click", TABELAWYSWIETLANA);
//   td dlatego że zmieniamy tylko 1 box, tr zmieniloby caly rzad (td jest w tr)
