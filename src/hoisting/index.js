//El hoisting asigna nameOfDog con undefined ya que aun no esta declarada al momento de ser llamada por el console.log();
// console.log(nameOfDog);
// var nameOfDog = 'Charlotte';
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}
//El hoisting asigna elmo con undefined ya que aun no esta declarada al momento de ser llamada por la función nameOfDog();
var elmo = 'Elmito';