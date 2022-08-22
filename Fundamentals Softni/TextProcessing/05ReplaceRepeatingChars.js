function solve(input) {
    let res = input[0]
    for (let i = 1; i < input.length; i++) {
        if(input[i]!=input[i-1]){
            res+=input[i]
        }
    }
    console.log(res);
}
solve('aaaaabbbbbcdddeeeedssaa')