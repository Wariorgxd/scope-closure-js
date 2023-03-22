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

function countries() {
    //la variable country no esta declarada, por ende su scope es global
    country = 'Colombia'; //Global
    console.log(country);
}

countries();
console.log(country);