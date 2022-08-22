function godzillaVsKong (input) {
    let budget = Number(input[0])
    let stuntman = Number(input[1])
    let priceForClothesPerPerson = Number(input[2])

    let decorPrice = budget*0.1;
    let totalPriceForClothes = stuntman*priceForClothesPerPerson;
    if (stuntman>150){
        totalPriceForClothes = totalPriceForClothes*0.9;
    }
    let totalMoney = decorPrice+totalPriceForClothes

    if (totalMoney>budget){
        let moneyNeeded = totalMoney-budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget-totalMoney;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000",
"120",
"55.5"])
