//1. Napisz funkcję, która jako argument będzie przyjmować string, a zwracać będzie jego odwrotność np: "piesek" => "keseip".

const otherWay = (stringToReverse) => {
    return stringToReverse.split("").reverse().join("");
}

console.log(otherWay("arbuz"));
console.log(otherWay("1234"));
console.log(otherWay("MaRtA"));
console.log(otherWay("Tadam!"));

