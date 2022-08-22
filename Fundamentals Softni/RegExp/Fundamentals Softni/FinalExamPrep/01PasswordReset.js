function solve(input) {
    let message = input.shift()
    let index = 0
    let command = input[index]

    while (command!="Done") {
        let splittedCommand = command.split(' ')
        let action = splittedCommand.shift()
        switch (action) {
            case "TakeOdd":
                let password =''
                for (let i = 0; i < message.length; i++) {
                    if(i%2!==0){
                        password+=message[i]
                    }
                }
                message=password
                console.log(password);
                break;
            case "Substitute":
                let substr = splittedCommand[0]
                let substitute = splittedCommand[1]
                
                if (message.includes(substr)) {
                    while (message.includes(substr)) {
                        message = message.replace(substr,substitute)   
                    }
                    console.log(message);
                } else{
                    console.log("Nothing to replace!");
                }
                break;
            case "Cut":
                let j = Number(splittedCommand[0])
                let length = Number(splittedCommand[1])

                let strTocut = message.substring(j, j+length)
                message = message.replace(strTocut,"")
                console.log(message);
                break;
        }
        index++
        command = input[index]
    }
    console.log(`Your password is: ${message}`);
}
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])