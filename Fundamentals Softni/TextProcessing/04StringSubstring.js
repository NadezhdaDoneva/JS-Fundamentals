function solve(word, text) {
    let newWord =word.toLowerCase()
    let newText1 = text.toLowerCase()
    let newText = newText1.split(' ')
    let isFound = false

    for (const word of newText) {
        if(word==newWord){
            isFound=true

        }
    }
    if(isFound){
        console.log(word);
    } else{
        console.log(`${word} not found!`);
    }
}
solve('javascript',

'JavaScript is the best programming language')
