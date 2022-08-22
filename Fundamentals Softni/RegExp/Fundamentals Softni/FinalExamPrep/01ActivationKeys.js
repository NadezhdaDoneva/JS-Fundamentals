function solve(input) {
    let activationKey = input.shift()
    let index =0
    let command = input[index]

    while (command!="Generate") {
        let commandSplitted = command.split(">>>")
        let action = commandSplitted.shift()

        switch (action) {
            case "Flip":
                let ul = commandSplitted[0]
                let startIndex = commandSplitted[1]
                let endIndex = commandSplitted[2]
                if(ul=="Upper"){
                    let changed = (activationKey.substring(startIndex,endIndex)).toUpperCase()
                    activationKey = activationKey.substring(0,startIndex) + changed + activationKey.substring(endIndex)
                }
                if (ul=="Lower") {
                    let changed1 = (activationKey.substring(startIndex,endIndex)).toLowerCase()
                    activationKey = activationKey.substring(0,startIndex) + changed1 + activationKey.substring(endIndex)
                }
                console.log(activationKey);
                break;
        
            case "Slice":
                let startI = commandSplitted[0]
                let endI = commandSplitted[1]

                let toBeDeleted = activationKey.substring(startI,endI)
                activationKey = activationKey.replace(toBeDeleted,"")
                console.log(activationKey);
                break;
            case "Contains":
                let sub  = commandSplitted[0]
                if(activationKey.includes(sub)){
                    console.log(`${activationKey} contains ${sub}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
        }
        index++
        command=input[index]
    }
    console.log(`Your activation key is: ${activationKey}`);
}
solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])