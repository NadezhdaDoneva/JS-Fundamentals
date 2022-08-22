function lunchBreak (input){
    let tvSeries = input[0]
    let episodeDuration=Number(input[1])
    let breakTime = Number(input[2])

    let lunchTime = breakTime/8
    let restTime = breakTime/4

    let remainingTime = Math.abs(breakTime-lunchTime-restTime)
    let freetimeLeft = Math.abs(remainingTime-episodeDuration)

    if (remainingTime>=episodeDuration){
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(freetimeLeft)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(freetimeLeft)} more minutes.`)
    }
}
lunchBreak(["Game of Thrones",
"60",
"96"])
