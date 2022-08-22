function solve(input) {
    let neighborhood = input.shift().split('@').map(Number)
    let command = input.shift()
    console.log(command[1]);
    let startI =0
    let win = false
    let conterNot0 = 0
    while(command!=`Love!`){
        command = command.split(' ')
        let distance = command[1]
        command = input.shift()
        let nextPosition = startI+distance
        if(nextPosition>=neighborhood.length){
            nextPosition=0
        }
        if (neighborhood[nextPosition]){
            console.log(`Place ${nextPosition} already had Valentine's day.`);
        } else{
        neighborhood[nextPosition]-=2
        if(neighborhood[nextPosition]==0){
            console.log(`Place ${nextPosition} has Valentine's day.`);
        }
    }
    let arr = neighborhood
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==0) {
            arr.splice(i,1)
        }
        
    }
    if(arr.length==0){
        win=true
        break
    }
    }
    for (let i = 0; i < neighborhood.length; i++) {
        if (neighborhood[i]!=0) {
            conterNot0++
        }
        
    }
    if(win){
        console.log("Mission was successful.");
    } else{
        console.log(`Cupid has failed ${conterNot0} places.`);
    }
}
solve(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])