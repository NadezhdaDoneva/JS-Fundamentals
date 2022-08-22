function toyShop (input){
    let puzzlePrice = 2.6
    let talkingDollPrice =3
    let teddyBearPrice = 4.1
    let minionPrice = 8.2
    let truckPrice = 2

    let vacationPrice = Number(input[0])
    let puzzleCount = Number(input[1])
    let talkingDollCount = Number(input[2])
    let teddyBearCount = Number(input[3])
    let minionCount = Number(input[4])
    let truckCount = Number(input[5])

    let toyCount = puzzleCount+talkingDollCount+teddyBearCount+minionCount+truckCount
    let totalCost = puzzleCount*puzzlePrice+ talkingDollCount*talkingDollPrice+teddyBearCount*teddyBearPrice+minionCount*minionPrice+truckCount*truckPrice

    if (toyCount>=50){
        totalCost = totalCost*0.75
    }

    totalCost= totalCost*0.9
    let difference = Math.abs(totalCost-vacationPrice)
    if (totalCost>=vacationPrice){
        console.log(`Yes! ${difference.toFixed(2)} lv left.`)
    } else {
        console.log (`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
}
toyShop (["40.8",
"20",
"25",
"30",
"50",
"10"])