function printHW() {
    console.log("Hello World"),
        document.getElementById('print-hw').innerHTML = "Hello World";
}

function sumOfNumbers() {
    const num1 = 12
    const num2 = 34;
    var sum = num1 + num2;
    document.getElementById('Sum-integers').innerHTML = "The Sum of integers are " + sum;
}

function squareRootOfNum() {
    const number1 = 49;
    const result = Math.sqrt(number1);
    document.getElementById('sqrt-num').innerHTML = `The SquareRoot of ${number1} = ${result}`;
}

function areaOfTriangle() {
    const base = 3,
        height = 4;

    const area = (base * height) / 2;
    document.getElementById('area-tri').innerHTML = `The Area of Triangle is ${area}`;

}

function kilometersToMiles() {
    const kilom = 24;
    const factor = 0.621371;
    const miles = kilom * factor;
    document.getElementById('ki-to-mi').innerHTML = `${kilom} kilometers is ${miles} miles`;
}

function checkNumbers() {
    const number = 10;
    if (number == 0) {
        document.getElementById('check-numbers').innerHTML = `${number} is zero`;
    } else if (number < 0) {
        document.getElementById('check-numbers').innerHTML = `${number} is Negative`;
    } else {
        document.getElementById('check-numbers').innerHTML = `${number} is Positive`;
    }

}

function factorialNumber() {
    const factor = 1;
    const number = 5;
    if (number < 0) {
        document.getElementById('fact-num').innerHTML = `There is no Factorial for a Negative number`;
    } else if (number == 0) {
        document.getElementById('fact-num').innerHTML = `The Factorial of ${number} is ${factor}`;
    } else {
        let fact = 1;
        for (var i = 1; i <= number; i++) {
            fact *= i;
        }
        document.getElementById('fact-num').innerHTML = `The factorial of ${number} is ${fact}.`;
    }
}

function variableDefinition() {
    var x = 5,
        y = 6,
        z;
    var firstName = "Parthiban";
    var lastName = "M";
    var age = 24;
    var fullName = firstName + " " + lastName;
    z = x + y;
    document.getElementById("numVar").innerHTML = z;
    document.getElementById("str").innerHTML = firstName + " " + lastName;
    document.getElementById("concat").innerHTML = fullName + " is of age " + age;
}

function ObjectDeclaration() {
    const car = {
        type: "Sedan",
        fuel: "Petrol",
        color: "Blue"
    };

    document.getElementById("objectField").innerHTML = "I've got a " + car.type + " of color " + car.color + " which runs on " + car.fuel;
}

function arrayDeclaration() {
    const cars = ["Ferari", "Audi", "BMW"];
    let length = cars.length;
    let txt = "<ul>";
    for (var i = 0; i < length; i++) {
        txt += "<li>" + cars[i] + "</li>";
    }
    txt += "</ul>"
    document.getElementById('demo_array1').innerHTML = txt;
}
(function() {
    printHW();
    sumOfNumbers();
    squareRootOfNum();
    areaOfTriangle();
    kilometersToMiles();
    checkNumbers();
    factorialNumber();
    variableDefinition();
    ObjectDeclaration();
    arrayDeclaration();

})();