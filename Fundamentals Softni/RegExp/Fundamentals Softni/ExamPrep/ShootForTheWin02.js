function solve(input) {
    let targets = input.shift().split(' ').map(Number)
    let command = input.shift()
    let counter =0
    while (command!='End') {
        if(command>=targets.length || command<0){

        } else{
            counter++
            for (let i = 0; i < targets.length; i++) {
                if(i!=command){
                if(targets[i]!=-1){
                if(targets[command]>=targets[i]){
                    targets[i]=targets[i]+targets[command]
                } else{
                    targets[i]= targets[i]-targets[command]
                }
            }
        }
            }
        targets[command]=-1
        }
        command=input.shift()
    }
    console.log(`Shot targets: ${counter} -> ${(targets).join(` `)}`);
}
solve(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])