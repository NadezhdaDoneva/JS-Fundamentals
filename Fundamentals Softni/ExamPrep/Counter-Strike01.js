function solve(input) {
    let energy = Number(input.shift())
    let command = Number(input.shift())
    let wins=0
    while (command!= 'End of battle') {
        let curCommand = Number(command)
        if(energy>=curCommand){
        energy=energy-curCommand
        wins++
        if (wins%3==0) {
            energy= energy+wins
        }
        } else{
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break
        }

        command= input.shift()
    }
    if (command==`End of battle`) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}
solve(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])