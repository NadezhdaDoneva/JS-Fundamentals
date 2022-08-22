function solve(words, sentence) {

    let wordsToReveal = words.split(", ");
    let sentenceArr = sentence.split(' ');

    for (const element of wordsToReveal) {
        for (const word of sentenceArr) {
            if(word.includes('*')&& word.length == element.length){
                sentence = sentence.replace(word,element)
            }
        }
    }
    console.log(sentence);
}
solve('great, learning',

'softuni is ***** place for ******** new programming languages')