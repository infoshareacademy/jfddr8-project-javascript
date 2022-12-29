<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      ZADANIE 1
        function OdwrotnoscHasla() {
          let string = "piesek";
          string = [...string].reverse().join("");
          return string;
        }
        console.log(OdwrotnoscHasla());

        ZADANIE 2

        function PODMIANKA() {
          const string = "Joanna Czarnecka";
          const [Imie, Nazwisko] = string.split(" ");
          const PierwszaLiterkaImie = Imie[0];
          const PierwszaLiterkaNazwisko = Nazwisko[0];
          const ZamienioneLiteryImie = PierwszaLiterkaNazwisko + Imie.slice(1);
          const ZamienioneLiteryNaziwsko =
            PierwszaLiterkaImie + Nazwisko.slice(1);
          const Zamienione =
            ZamienioneLiteryImie + " " + ZamienioneLiteryNaziwsko;
          return Zamienione;
        }
        console.log(PODMIANKA());
        // ZADANIE 3

        const TablicaJeden = [1, 2, 3];
        const TablicaDwa = [4, 2, 8];
        function Reducer(Suma, NumerTablicy) {
          return Suma + NumerTablicy;
        }
        function Tablica() {
          const WartoscTablicaJeden = TablicaJeden.reduce(Reducer, 0);
          const WartoscTablicaDwa = TablicaDwa.reduce(Reducer, 0);
          console.log(WartoscTablicaDwa);
          console.log(WartoscTablicaJeden);

          if (WartoscTablicaJeden > WartoscTablicaDwa) {
            return WartoscTablicaJeden - WartoscTablicaDwa;
          } else {
            return WartoscTablicaDwa - WartoscTablicaJeden;
          }
        }

        console.log(Tablica());

        ZADANIE 4

        const TablicaJeden = "lampart";
        const TablicaDwa = TablicaJeden.split("");
        let LiczbaSamoglosek = 0;
        function LiczbaSamoglosekWSlowie() {
          for (let i = 0; i < TablicaJeden.length; i++) {
            if (
              TablicaDwa[i].includes("a", "e", "i", "o", "u", "ó", "y", "ą", "ę")
            ) {
              LiczbaSamoglosek += 1;
              // LiczbaSamoglosek = LiczbaSamoglosek +1
            }
          }
          return LiczbaSamoglosek;
        }

        console.log(LiczbaSamoglosekWSlowie());

      ZADANIE 5

        function NAJWIEKSZELICZBY(n, Tablica) {
          Tablica.sort();
          Tablica.reverse();
          let TablicaPowrotna = [];
          for (i = 0; i < n; i++) {
            TablicaPowrotna.push(Tablica[i]);
          }
          return TablicaPowrotna;
        }
        console.log(NAJWIEKSZELICZBY(3, [5, 3, 1, 4, 2]));

      Zadanie 6
      const objectONE = { George: 15, Bettie: 10, Anna: 5 };

      function ROZLICZENIE(objectONE) {
        let Tablica = Object.values(objectONE);
        let SUMA = Tablica.reduce(function (PoprzedniaWartosc, ObecnaWartosc) {
          return PoprzedniaWartosc + ObecnaWartosc;
        });
        let SREDNIA = SUMA / Tablica.length;
        for (let i = 0; i < Tablica.length; i++) {
          Tablica[i] = Tablica[i] - SREDNIA;
        }
        console.log(Tablica);
      }
      console.log(ROZLICZENIE(objectONE));
    </script>
  </body>
</html>
