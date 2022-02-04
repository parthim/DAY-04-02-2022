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


variableDefinition();
ObjectDeclaration();