function worldSwimmingRecord (input) {
    let secondsWR= Number(input[0])
    let meters = Number(input[1])
    let secondsForOneMeter = Number(input[2])

    let secondsAdded = Math.floor(meters/15)*12.5
    let swimmingTime = meters*secondsForOneMeter+secondsAdded

    if (swimmingTime>=secondsWR){
        let secondsSlower = swimmingTime-secondsWR;
        console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord (["10464",
"1500",
"20"])