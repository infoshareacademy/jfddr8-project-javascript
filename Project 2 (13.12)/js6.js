//6*. Napisz funkcję, która pomoże podzielić po równo rachunek osobom,
//które zapłaciły wyjściowo różną kwotę. Funkcja ma przyjmować obiekt,
//w którym kluczami będą imiona osób, a wartościami kwoty, które zapłacili,
//np: {George: 15, Bettie: 10, Anna: 5}. Funkcja ma zwrócić obiekt w takiej samej formie,
//ale jako wartości mają być podane kwoty należności każdej z osób,
//czyli w tym przypadku byłoby to {George: 5, Bettie: 0, Anna: -5},
//bo George ma otrzymać z powrotem 5, Bettie jest na czysto, a Anna musi dopłacić 5.
//Mogą przydać się funkcje obiektowe, typu Object.values, i np. Array.reduce.

let object1 = {
    George: 15,
    Bettie: 10,
    Anna: 5
};

let object2 = Object.values(object1);

function total() {
    let sumOfObjects = 0;
    for (let i = 0; i < (object2.length); i++) {
    sumOfObjects = sumOfObjects + object2[i];
};
return sumOfObjects;
};

console.log(total());

/*const sumOfObjects = quizAnswers.reduce((sum, object) => sum + object.answer);*/



/*
        const quizAnswers = [
            {answer: 'A', points: 2},
            {answer: 'D', points: 4},
            {answer: 'C', points: 1},
            {answer: 'A', points: 5},
        ];
        // Używając metody reduce utwórz obiekt zawierający sumę punktów 
        // oraz wszystkie odpowiedzi jako jeden ciąg znaków np. ADCA.
        // np.: {sum: 15, answers: 'ADCA'}

        const sumOfObjects1 = quizAnswers.reduce((sum, object) => {
            let loopOfObject = sum + object.answer;
            return loopOfObject;
        }, "");
        console.log(sumOfObjects1)
        
        let sumOfObjects = "";
        for (let i = 0; i < quizAnswers.length; i++) {
            sumOfObjects = sumOfObjects + quizAnswers[i].answer;
        }
        console.log(sumOfObjects);

        console.log(sumOfObjects1 === sumOfObjects);

        //funkcja zawsze jest pierwszym argumentem metody .reduce

    </script>
    */