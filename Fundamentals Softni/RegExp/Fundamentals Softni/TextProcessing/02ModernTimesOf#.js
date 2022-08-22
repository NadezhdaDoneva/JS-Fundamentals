function solve(sentence) {
    let splittedSentence = sentence.split(' ')
    let specialWords = []
    for (const word of splittedSentence) {
        if(word.startsWith('#') && word.length>1){
            specialWords.push(word)
        }
    }
    for (const word of specialWords) {
        let isForPrint = true
        newWord = word.split('#')[1]
        for (const el of newWord) {
            if(!isNaN(el)){
            isForPrint=false
            }
        }
        if (isForPrint) {
            console.log(newWord)
        }
    }
}
solve('Nowadays everyone uses # to tag a #spec1al word in #socialMedia')