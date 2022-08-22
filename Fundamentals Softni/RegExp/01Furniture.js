function solve(input) {

    let text = input.join(' ')
    let furnitureArr = []
    let totalSum = 0
    let pattern = /[>]{2}(?<furniture>[A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm 
    let valid = pattern.exec(text)
    while (valid!==null) {
    furnitureArr.push(valid[1])
    totalSum+=valid[2]*valid[3]
    valid = pattern.exec(text)
    }
    console.log("Bought furniture:");
    for (const el of furnitureArr) {
        console.log(el);
    }
    console.log(`Total money spend: ${(totalSum).toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])