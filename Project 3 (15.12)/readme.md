# Projekt 3 - javascript DOM api

1. Zrobić przycisk generujący nową tabelę w html, a obok niego dwa inputy - jeden na liczbę rzędów, a drugi liczbę kolumn w tabeli.
2. Po naciśnięciu przycisku ma się wygenerować tabela z liczbą rzędów i kolumn podaną w inputach. Inputy ustawcie na type=“number” i za pomocą js, jeżeli zostanie wpisana ujemna liczba w któryś z inputów wyświetlcie alert informujący, że przyjmujemy tylko dodatnie (warto też ustawić jakieś rozsądne maksymalne wartości dla inputów. Nie polecam próbować generować tabeli z 18000000 rzędami w przeglądarce :)).
3. Każda z komórek tabeli ma mieć w środku tekst opisujący pozycję danej komórki, np. komórka w trzecim rzędzie i w czwartej kolumnie ma mieć tekst “cell in row 3, column 4”.
4. Po kliknięciu danej komórki, jej tło ma się kolorować na żółto, a po kliknięciu jeszcze raz na tą komórkę, ma wrócić do przezroczystego tła.
5. Każde naciśnięcie przycisku do generowania tabeli ma najpierw usuwać poprzednią tabelę.
6. Mogą się przydać się funkcje "createElement", "appendChild", "createTextNode".
