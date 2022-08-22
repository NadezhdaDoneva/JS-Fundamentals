function solve(input) {
    let pattern = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g
    let allMatches = input.matchAll(pattern)
    let wordLength = 0 
    let res = []

    for (const iterator of allMatches) {
        wordLength+=iterator.groups.name.length
        res.push(iterator.groups.name)
    }
    console.log(`Destinations: ${res.join(`, `)}`);
    console.log(`Travel Points: ${wordLength}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")