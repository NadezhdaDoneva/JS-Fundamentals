function solve(input) {
    let targets = input.shift().split(` `).map(Number)
    let command = input.shift();
    while(command!=`End`){
        command = command.split(' ')
        let action = command[0]
        let index = Number(command[1])
        let power = Number(command[2])
        switch(action){
            case `Shoot`:
                if(index>=0 && index<targets.length){
                    targets[index]=targets[index]-power
                }
                if(targets[index]<=0){
                    targets = targets.filter(t=>t!==targets[index])
                }
            break
            case `Strike`:
                if(index-power>=0 && index<targets.length-power){
                    for (let j = 0; j < index+power; j++) {
                        if(j>=index-power && j<=index+power){
                            targets = targets.filter(w=>w!==targets[j])
                        }
                    }
                    targets = targets.filter(w=>w!==targets[power])
                } else{
                    console.log(`Strike missed!`);
                }
            break
            case `Add`:
                if(index>=0 && index<targets.length){
                    targets.splice(index,0,power)
                }else{
                    console.log(`Invalid placement!`);
                }
            break
        }
        command = input.shift()
    }
    console.log(targets.join(`|`));
}
solve(["1 2 3 4 5",
"Strike 0 1",
'Add 10 8',
"End"])