function timePlus15Minutes (input) {
    let hours = Number(input[0])
    let minutes = Number(input[1])

    minutes = minutes+15
    if (minutes>=60) {
        hours = hours+1;
        minutes = minutes-60
    }
    if (hours>=24) {
    hours = 0
    }
    if (minutes<10){
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }
}
timePlus15Minutes (["1", "46"])