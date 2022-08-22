function solve(input) {
    let encryptedMessage = input[0]
    let index=0
    let command = input[index]

    while(command!='Decode'){
        let tokens = command.split('|')
        let action = tokens[0]

        switch (action) {
            case 'Move':
                let num = tokens[1]
                let letters = encryptedMessage.slice(0, num)
                encryptedMessage=encryptedMessage.replace(letters, '')
                encryptedMessage+=letters
                break;
            case 'Insert':
                let value = tokens[1]
                let letter = tokens[2]
                encryptedMessage = encryptedMessage.substring(0,value)+letter+encryptedMessage.substring(value)
                break;
            case 'ChangeAll':
                let oldLetter = tokens[1]
                let newLetter = tokens[2]
                while (encryptedMessage.includes(oldLetter)) {
                    encryptedMessage = encryptedMessage.replace(oldLetter,newLetter)   
                }
            break;
        }
        index++
        command = input[index] 
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])