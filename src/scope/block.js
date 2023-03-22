//block scope
function fruits() {
    //dejar de utilizar var ya que modifican el scope de la variable de bloque
    if(true){
        var fruit = 'Manzana'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit);
}

console.log(fruits)
fruits();