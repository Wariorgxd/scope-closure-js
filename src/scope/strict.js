//Solo se esta asignando el valor a la variable
pi = 3.1416; // Si muestra el valor
console.log(pi);

'use strict';
pi = 3.1416; //Error. Tenemos que declarar la variable y luego asignarle su valor
console.log(pi);

//El use strict tambien se puede utilizar dentro de funciones
function myFunction() {
    'use strict';
    return pi = 3.1416; //Error
}

myFunction();