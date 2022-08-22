function solve(input) {
    let obj = {}
    let allElements = []
    for (const el of input) {
        let parsedElement = JSON.parse(el)
        let tempTermAndDefinition = Object.entries(parsedElement)
        let tempKey = Object.keys(parsedElement)
        if(allElements.includes(tempTermAndDefinition[0])){
            obj[tempTermAndDefinition[0]]=tempTermAndDefinition[1]
        } else{
            obj = Object.assign(obj,parsedElement)
            allElements.push(tempKey)
        }
    }
    let terms = Object.keys(obj)
    terms = terms.sort()
    for (const term of terms) {
        console.log(`Term: ${term} => Definition: ${obj[term]} `);
    }
}
solve([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Coffee":"A gadno sth"}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])