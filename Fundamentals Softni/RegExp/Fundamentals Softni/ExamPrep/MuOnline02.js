function solve(input) {
    let rooms = input.split('|')
    let i=0
    let health = 100
    let bitcoins =0
    let lose = false
    let roomCounter =0
    for (let k = 0; k < rooms.length; k++){
        
    
        let action = rooms[k]
        let act = action.split(' ')
        let command = act[0]
        let points = Number(act[1])
        i++
        roomCounter++
        switch (command) {
            case `potion`:
                if(health+points>100){
                    console.log(`You healed for ${100-health} hp.`);
                    health=100
                    console.log(`Current health: ${health} hp.`);
                }else{
                    health+=points
                    console.log(`You healed for ${points} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                break;

            case `chest`:
                bitcoins+=points
                console.log(`You found ${points} bitcoins.`);
                break;

            default:
                health-=points
                if(health>0){
                    console.log(`You slayed ${command}.`);
                } else{
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCounter}`);
                    lose = true
                    break
                }
                break;
        }
    }
    if(!lose){
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")