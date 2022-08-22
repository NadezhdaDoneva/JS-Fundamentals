function solve(input) {
    let startsum=0
    let changedsum=0
    let inputL = input.length
    for(let i=0; i<inputL; i++){
        startsum+=input[i]
        if (input[i]%2==0){
            input[i]+=i
        } else{
            input[i]-=i
        }
        changedsum+=input[i]
    }
    console.log(input);
    console.log(startsum)
    console.log(changedsum)
}
solve([5, 15, 23, 56, 35])