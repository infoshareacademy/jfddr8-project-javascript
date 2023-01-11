//1. Zrobić przycisk generujący nową tabelę w html, a obok niego dwa inputy - jeden na liczbę rzędów, a drugi liczbę kolumn w tabeli.
//2. Po naciśnięciu przycisku ma się wygenerować tabela z liczbą rzędów i kolumn podaną w inputach.
//Inputy ustawcie na type=“number” i za pomocą js, jeżeli zostanie wpisana ujemna liczba w któryś z inputów wyświetlcie
//alert informujący, że przyjmujemy tylko dodatnie (warto też ustawić jakieś rozsądne maksymalne wartości dla inputów.
//Nie polecam próbować generować tabeli z 18000000 rzędami w przeglądarce :)).
//3. Każda z komórek tabeli ma mieć w środku tekst opisujący pozycję danej komórki, np. komórka w trzecim rzędzie
//i w czwartej kolumnie ma mieć tekst “cell in row 3, column 4”.
//4. Po kliknięciu danej komórki, jej tło ma się kolorować na żółto, a po kliknięciu jeszcze raz na tą komórkę, ma wrócić do przezroczystego tła.
//5. Każde naciśnięcie przycisku do generowania tabeli ma najpierw usuwać poprzednią tabelę.
//6. Mogą się przydać się funkcje "createElement", "appendChild", "createTextNode".

let table = document.getElementById("theTable");
let rows = 0;
let columns = 0;
console.log(table);
    function generateTable() {
        table.innerHTML = "";
        function newTable() {
        let rows = document.getElementById("rowsNumber").value;
        let columns = document.getElementById("columnsNumber").value;
        let table = document.getElementById("theTable");
        console.log(rows);
        console.log(columns);
        if (rows < 0 || columns < 0){
            alert('Tabela przyjmuje tylko dodatnie wartości');
        } else if (rows > 100 || columns > 100){
            alert('Nie można używać wartości większych niż 100');
        } else {
        for (let i = 0; i <= rows - 1; i++){
            let newTableRow = document.createElement("tr");
            for (let itr = 0; itr <= columns - 1; itr++) {
            let newTableCell = document.createElement("td");
            let text = `cell in row ${i + 1}, column ${itr + 1}`;
            let newtext = document.createTextNode(text);
            newTableCell.appendChild(newtext);
            newTableRow.appendChild(newTableCell);
            }
            table.appendChild(newTableRow);
            function changeColor(evt) {
                evt.target.style.backgroundColor = 'yellow';
            }
            newTableRow.addEventListener('click', changeColor, false);
        }
        let allCells = document.getElementsByTagName("td");
        console.log(allCells);
        let tableData = document.querySelectorAll("td");
        console.log(tableData);
        }        
    }
    newTable();
}