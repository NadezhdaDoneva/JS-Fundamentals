function solve(input) {
    let numHeroes = input.shift()
    let list = {}
    let hero
    let hitPoints
    let manaPoints

    for (let i = 0; i < numHeroes; i++) {
        let heroInfo = input[i].split(" ")
        hero = heroInfo[0]
        hitPoints = Number(heroInfo[1])
        manaPoints = Number(heroInfo[2])

        if(!list.hasOwnProperty(hero)){
            list[hero] = []
            list[hero].push(hitPoints,manaPoints)
        }   
    }

    for (let i = numHeroes; i < input.length; i++) {
        let token = input[i].split(' - ')
        let command = token[0]

        if(command=="End"){
            break
        }
        switch (command) {
            case "Heal":
                hero = token [1]
                let amount1 = Number(token[2])

                if(list[hero][0]+amount1>=100){
                    console.log(`${hero} healed for ${100-list[hero][0]} HP!`);
                    list[hero][0]=100
                } else{
                    list[hero][0]+=amount1
                    console.log(`${hero} healed for ${amount1} HP!`);
                }
                break;
            case "Recharge":
                hero = token [1]
                let amount = Number(token[2])

                if(list[hero][1]+amount>=200){
                    console.log(`${hero} recharged for ${200-list[hero][1]} MP!`);
                    list[hero][1]=200
                } else{
                    list[hero][1]+=amount
                    console.log(`${hero} recharged for ${amount} MP!`);
                }
                break;
            case "TakeDamage":
                hero = token[1]
                let damage = Number(token[2])
                let attacker = token[3]

                if(list[hero][0]>damage){
                    list[hero][0]-=damage
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${list[hero][0]} HP left!`);
                } else{
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete list[hero]
                }
                break;
            case "CastSpell":
                hero = token[1]
                let neededMP = Number(token[2])
                let spellName = token[3]

                if(neededMP>list[hero][1]){
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                } else{
                    list[hero][1] = list[hero][1] - neededMP
                    console.log(`${hero} has successfully cast ${spellName} and now has ${list[hero][1]} MP!`);
                }
                break;
        }
    }
    for (const hero in list) {
        console.log(hero);
        console.log(`  HP: ${list[hero][0]}`);
        console.log(`  MP: ${list[hero][1]}`);
    }
}
solve([2,
    'Solmyr 85 120',
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`])