//Function Scope
function saludo() {
    //El alcance de esta variable solo abarca a la función.
    let userName = 'Sebastian';
    console.log(userName);

    if(userName === 'Sebastian'){
        console.log(`Hello ${userName}!`);
    }
}

//No puedo acceder a la variable declarada dentro de la función
console.log(userName);
saludo();