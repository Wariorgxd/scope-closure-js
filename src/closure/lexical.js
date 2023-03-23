
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myNumber, "MyNumber");

    function parent() { //Función interna
        const inner = 2;
        console.log(myNumber, "MyNumber");
        console.log(myGlobal, "MyGlobal");

        function child() {
            console.log(inner, "Inner");
            console.log(myNumber, "MyNumber");
            console.log(myGlobal, "MyGlobal");
        }
        return child();
    }
    return parent();
}

myFunction();
