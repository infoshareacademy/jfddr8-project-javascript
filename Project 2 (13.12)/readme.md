# Projekt 2 - JavaScript - operacje na typach złożonych

1. Napisz funkcję, która jako argument będzie przyjmować string, a zwracać będzie jego odwrotność np: "piesek" => "keseip".

2. Napisz funkcję, która jako argument będzie przyjmować string złożony z dwóch słów oddzielonych spacją, a zwracać będzie string złożony z tych samych dwóch słów, jednak pierwsze litery obu słów mają być zamienione miejscami, np: "Marek Jurek" => "Jarek Murek". Mogą przydać się split() i slice().

3. Napisz funkcję, która z podanych dwóch tablic z trzema wymiarami, np. [1, 2, 3] i [4, 2, 8] obliczy objetosci i zwróci różnicę (wiekszy - mniejszy). Przyda się Array.reduce().

4. Napisz funkcję, która zwróci liczbę samogłosek w podanym w argumencie stringu, np. "lampart" -> 2. Może się przydać split() i includes().

5. Napisz funkcję, która przyjmie dwa argumenty - number - "n" i tablicę z numberami. Zwróć nową tablicę z "n" największych numberów z tablicy wyjściowej, np. funkcja (2, [5, 3, 1, 4, 2]) -> [5, 4]. Przyda się funkcja Array.sort().

6*. Napisz funkcję, która pomoże podzielić po równo rachunek osobom, które zapłaciły wyjściowo różną kwotę. Funkcja ma przyjmować obiekt, w którym kluczami będą imiona osób, a wartościami kwoty, które zapłacili, np: {George: 15, Bettie: 10, Anna: 5}. Funkcja ma zwrócić obiekt w takiej samej formie, ale jako wartości mają być podane kwoty należności każdej z osób, czyli w tym przypadku byłoby to {George: 5, Bettie: 0, Anna: -5}, bo George ma otrzymać z powrotem 5, Bettie jest na czysto, a Anna musi dopłacić 5. Mogą przydać się funkcje obiektowe, typu Object.values, i np. Array.reduce.

Polecam wykonywać zadania na codepen.io lub w devtoolsach w przeglądarce Chrome. Wynik zacommitujcie do folderu z projektem 2, w formie pliku script.js z wypisanymi funkcjami. Branch według naszej tradycyjnej konwencji `git checkout -b project-2/[imienazwisko]`
