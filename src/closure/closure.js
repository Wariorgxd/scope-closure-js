
function greeting() {
    let userName = 'Sebastian';

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const hola = greeting();

console.log(hola);  //Retornamos la definición de la función
console.log(hola()); //retornamos el valor de la función

