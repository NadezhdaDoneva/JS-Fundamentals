function solve(input) {
    let stateStart = input.shift().split('|')
    let i
    let index=0
    let command = input[index]
    index++
    while (command!='Yohoho!') {
        let tokens = command.split(' ')
        let operation = tokens.shift()

        switch (operation) {
            case "Loot":
                for (const el of tokens) {
                    if(!stateStart.includes(el)){
                        stateStart.unshift(el)
                    }
                }
                break
            case "Drop":
                i = Number(tokens[0])
                if (i<0 || i>stateStart.length){
                    command=input[index]
                    index++
                    continue;
                }
                let element = stateStart.splice(i,1)
                stateStart.push(element[0])
                break

            case "Steal":
                let count = Number(tokens[0])
                let items = stateStart.splice(-count)
                console.log(items.join(', '))
                break
        }
        command = input[index]
        index++
    }
    
    if(stateStart.length>0){
        let sum = 0
    for (const el of stateStart) {
        sum+=el.length
    }
    let average = sum/stateStart.length
    console.log(`Average treasure gain: ${(average).toFixed(2)} pirate credits.`)
}
    else{
        console.log(`Failed treasure hunt.`)
    }
}
solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])