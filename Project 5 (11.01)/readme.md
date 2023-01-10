## Projekt 5 - asynchroniczność w JS

1. Pobrać listę użytkowników z adresu https://reqres.in/api/users
2. Wyświetlić imię, nazwisko i avatar użytkowników w HTML
3. Stworzyć input na podanie nazwy nowego usera “username” i przycisk “add”. Po kliknięciu przycisku ma się wywołać request POST na url https://reqres.in/api/users. Body requestu ma zawierać pole “name” z wartością z inputa.
4. Request będzie skutkował fejkową odpowiedzią (zwróci tylko datę utworzenia i id), ale i tak chcemy wyświetlić nowego usera jako dodatkowego na zafetchowanej wcześniej liście. Stwórzcie odpowiedni element HTML i wyświetlcie go w taki sposób jak poprzednio zafetchowanych userów, czyli nazwa + avatar. Avatar może być jakimś domyślnym obrazkiem.
5. Odpowiedź przyjdzie od razu, ale spróbujcie zasymulować oczekiwanie na nią (setTimeout), więc zanim wyświetlicie nazwę usera i avatar, wyświetlcie na 5 sekund napis “loading” w tym samym miejscu
6. Zasymulujemy również błąd z serwera. W przypadku, jeśli input na podanie nazwy usera będzie pusty, zmieńcie metodę requestu z ‘POST’ na ‘PSOT’ - to spowoduje, że request zwróci błąd. Złapcie ten błąd i poinformujcie alertem, że należy podać nazwę użytkownika. (W realnej sytuacji walidacja inputa odbyła by się na froncie za pomocą zabezpieczenia pola username, bądź odpowiedź z backendu zawierałaby informację o konieczności uzupełnienia pola w treści errora.)
