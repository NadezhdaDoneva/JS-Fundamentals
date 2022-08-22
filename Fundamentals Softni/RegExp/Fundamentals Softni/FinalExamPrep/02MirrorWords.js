function solve(input) {
    let pattern = /([#|@])(?<wordOne>[A-z]{3,})\1\1(?<wordTwo>[A-z]{3,})\1/g
    let allMatches = input[0].matchAll(pattern)
    let count=0
    let textarr = []
    let res = ''
    let arr = []
    for (const iterator of allMatches) {
        let one = iterator.groups.wordOne
        let two = iterator.groups.wordTwo
        let reversed = one.split('').reverse().join('')
        if (reversed==two) {
            arr.push(one)
            arr.push(two)
        }
        count++
    }
    if (count==0) {
        console.log("No word pairs found!")
        console.log("No mirror words!");
    } else{
        console.log(`${count} word pairs found!`);
        if (arr.length==0) {
            console.log("No mirror words!");
        } else {
            for (let i = 0; i < arr.length; i+=2) {
                textarr.push(`${arr[i]} <=> ${arr[i+1]}`)
            }
            console.log(`The mirror words are:`);
            console.log(textarr.join(', '));
        }
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    

    )