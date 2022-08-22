function solve(input) {
    let pattern = /(\#|\|)(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)\1(?<expDate>\d\d\/\d\d\/\d\d)\1(?<calories>\d+)\1/g
    let allMatches = input[0].matchAll(pattern)
    let totalCalories = 0
    for (const iterator of allMatches) {
        totalCalories+=Number(iterator.groups.calories)
    }

    let days = Math.floor(totalCalories/2000)
    console.log(`You have food to last you for: ${days} days!`);
    allMatches=input[0].matchAll(pattern)
    for (const iterator of allMatches) {
        console.log(`Item: ${iterator.groups.name}, Best before: ${iterator.groups.expDate}, Nutrition: ${iterator.groups.calories}`);
    }
}
solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
    ]
    )