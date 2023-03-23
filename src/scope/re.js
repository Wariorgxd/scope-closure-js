//Declaración de variable
//? var
var firstName; //Por defecto, se le asigna el valor 'Undefined'
firstName = 'Sebastian' //Asignación de la variable
console.log(firstName);

var lastName = 'Larcos'; //Declaración y asignación de una variable
lastName = 'Boada'; //Reasignación de una variable
console.log(lastName)

var secondName = 'Alexander'; //Declaración y asignación de una variable
var secondName = 'Ana'; //Redeclaración y reasignación
console.log(secondName);

//? let
let fruit = 'Apple'; //Declaración y asignación
fruit = 'Kiwi'; //Reasignación
// let fruit = 'banana'; No se puede redeclarar con la palabra reservada let
console.log(fruit);

//? const
const animal = 'Dog'; //Declaración e inicialización de una variable
// animal = 'Cat'; No se puede reasignar
//const animal = 'Caballo'; No se puede redeclarar ni reasignar.
console.log(animal);

const vehiculos = [];
vehiculos.push('🚗');
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);