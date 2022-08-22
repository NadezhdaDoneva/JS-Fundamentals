function shopping (input) {
    let budget = Number(input[0])
    let videoCardsCount = Number(input[1])
    let processorCount = Number(input[2])
    let ramCount = Number(input[3])

    let singleVideoCardPrice = 250

    let videoCardsPrice = videoCardsCount*singleVideoCardPrice
    let processorsPrice = videoCardsPrice*0.35
    let ramPrice = 0.1*videoCardsPrice

    let totalSum = videoCardsPrice+processorCount*processorsPrice+ ramCount*ramPrice
    if (videoCardsCount>processorCount){
        totalSum = totalSum*0.85
    }

    let difference = Math.abs(totalSum-budget).toFixed(2)
    if (totalSum<=budget){
        console.log(`You have ${difference} leva left!`)
    } else {
        console.log(`Not enough money! You need ${difference} leva more!`)
    }
}
shopping (["900",
"2",
"1",
"3"])