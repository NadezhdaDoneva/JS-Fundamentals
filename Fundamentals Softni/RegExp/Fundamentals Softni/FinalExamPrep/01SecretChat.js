function solve(input) {
    let encryptedMessage = input.shift()
    let index = 0
    let command = input[index]

    while (command!='Reveal') {
        let commandSplitted = command.split(':|:')
        let action = commandSplitted.shift()

        switch (action) {
            case 'ChangeAll':
                let oldWord = commandSplitted[0]
                let newWord = commandSplitted[1]
                while (encryptedMessage.includes(oldWord)) {
                    encryptedMessage = encryptedMessage.replace(oldWord,newWord)
                }
                console.log(encryptedMessage);
                break;
        
            case 'Reverse':
                let sub = commandSplitted[0]
                if(!encryptedMessage.includes(sub)){
                    console.log("error");
                } else{
                    encryptedMessage = encryptedMessage.replace(sub, "")
                    let newSub = sub.split('').reverse().join('')
                    encryptedMessage = encryptedMessage+newSub
                    console.log(encryptedMessage);
                }
                 break;
            case 'InsertSpace':
                let i = commandSplitted[0]
                encryptedMessage = encryptedMessage.substring(0,i) + " " + encryptedMessage.substring(i)
                console.log(encryptedMessage);
                break;
        
        }

        index++
        command= input[index]
    }
    console.log(`You have a new text message: ${encryptedMessage}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])