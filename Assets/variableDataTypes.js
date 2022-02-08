function printHW() {
    // console.log("Hello World"),
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

function printFibonacci() {
    const number = 10;
    let n1 = 0,
        n2 = 1,
        nxtnum;

    for (let i = 1; i <= number; i++) {
        document.getElementById('fibo-series').innerHTML = n1;
        nxtnum = n1 + n2;
        n1 = n2;
        n2 = nxtnum;
    }
}

function cardShuffle() {
    const suits = ["Spades", "Club", "Diamond", "Heart"];
    const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    let deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suits: suits[i] };
            deck.push(card);
        }
    }
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById('card-deck').innerHTML = `${deck[i].Value} of ${deck[i].Suits}`;
    }
}

function sortAlphabetically() {
    const string = "I am having a good time";
    let words = string.split(' ');
    words.sort();
    for (const word of words) {
        document.getElementById('sort-aplh').innerHTML = word;
        console.log(word);
    }
}

function objectCreation() {
    const person = {
        name: 'Parthi',
        age: 24,
        hobbies: ['Badminton', 'Table Tennis', 'Gaming'],
        greet: function() {
            console.log("Hello everyone");
        },
        score: {
            maths: 97,
            science: 100
        }

    };

    console.log(person.name);
    console.log(person.hobbies[0]);
    console.log(person.score.maths);
    person.greet();
};

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
    const cars = ["Ferrari", "Audi", "BMW"];
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
    printFibonacci();
    cardShuffle();
    sortAlphabetically();
    objectCreation();
    variableDefinition();
    ObjectDeclaration();
    arrayDeclaration();

})();