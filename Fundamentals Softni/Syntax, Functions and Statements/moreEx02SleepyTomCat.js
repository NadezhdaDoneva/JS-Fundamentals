function SleepyTom(input) {
    let weekendDays = Number(input[0])
    let workDays = 365 - weekendDays

    let playTimeWeekend = weekendDays*127
    let playTimeWorkDays = workDays*63
    let totalPlayTime = playTimeWeekend+playTimeWorkDays
    let diffrence = Math.abs(30000-totalPlayTime)
    let hours = Math.floor(diffrence/60)
    let minutes = diffrence-hours*60

    if (totalPlayTime>30000){
        console.log("Tom will run away")
        console.log (`${hours} hours and ${minutes} minutes more for play`)
    } else{
        console.log("Tom sleeps well")
        console.log(`${hours} hours and ${minutes} minutes less for play`) 
    }

}
SleepyTom (["20"])