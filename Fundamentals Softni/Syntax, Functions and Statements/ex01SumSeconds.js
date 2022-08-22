function sumOfSeconds (input) {
    let firstTime = Number(input[0])
    let secondTime = Number(input[1])
    let thirdTime = Number(input[2])

    let totalTime = firstTime +secondTime + thirdTime
    let minutes = 0;
    let seconds = 0;

    if (totalTime>=120){
        minutes=2
        seconds = totalTime-120
    } else if (totalTime>=60){
        minutes = 1;
        seconds=totalTime-60;
    } else {
        seconds=totalTime
    }

    if (seconds<10){
        console.log(`${minutes}:0${seconds}`)
    } else {
            console.log(`${minutes}:${seconds}`)
    }
}
sumOfSeconds (["35","45","44"])