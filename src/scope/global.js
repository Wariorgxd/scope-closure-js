//? Variable

var a; //declaración de la variable a
var b = 'b'; //declaración y asignación de la variable b
b = 'bb'; //reasignando la variable b
var a = 'aa'; //redeclaración

// ! Global Scope

var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function country() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);