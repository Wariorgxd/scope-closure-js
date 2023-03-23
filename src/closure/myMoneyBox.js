//Forma tradicional de hacer una alcancia

// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money Box $${saveCoins}`)
// }

// moneyBox(5);

//Forma con closures
function myMoneyBox() {
    let saveCoins = 0;
    function addCoins(coins) {
        saveCoins += coins;
        console.log(`Money Box $${saveCoins}`)
    }
    return addCoins;
}

const cepo = myMoneyBox();

cepo(5); //$5
cepo(5); //$10
cepo(5); //$15

console.log("-----------")

const cepoSebas = myMoneyBox();

cepoSebas(12); //$12
cepoSebas(20); //$32
cepoSebas(2); //$34