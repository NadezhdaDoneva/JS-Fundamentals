function solve(input) {
    let stopsList = input.shift()
    let index = 0
    let command = input[index]

    while (command!='Travel') {
        let commandSplitted = command.split(':')
        let action = commandSplitted.shift()

        switch (action) {
            case "Add Stop":
                let i = commandSplitted[0]
                let stop = commandSplitted[1]
                //if(i>=0 && i<stopsList.length){
                 stopsList = stopsList.substring(0,i) + stop + stopsList.substring(i)
                //}
                console.log(stopsList);
                break;
            case "Remove Stop":
                let startIndex = commandSplitted[0]
                let endIndex = Number(commandSplitted[1])
               // if (startIndex>=0 && endIndex>0 && startIndex<stopsList.length && endIndex<stopsList.length) {
                    stopsList = stopsList.substring(0,startIndex) + stopsList.substring(endIndex+1, stopsList.length)
               // }
                console.log(stopsList);
                break;
            case "Switch":
                let oldStop = commandSplitted[0]
                let newStop = commandSplitted[1]
                //if(stopsList.includes(oldStop)){
                    while (stopsList.includes(oldStop)) {
                        stopsList = stopsList.replace(oldStop,newStop)
                    }
             //   }
                console.log(stopsList);
                break;
        }
        index++
        command = input[index]
    }
    console.log(`Ready for world tour! Planned stops: ${stopsList}`);
}
solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])