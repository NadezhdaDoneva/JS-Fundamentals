function solve(array) {
    let foundIndex="no"
    let inputL = array.length

    for (let i = 0; i < inputL; i++) {
        let leftSum=0
        let rightSum =0
        for (let l = 0; l < i; l++) {
            leftSum+=array[l]
        }
        for (let r = i+1; r < inputL; r++) {
            rightSum+=array[r]
        }
        if (leftSum===rightSum) {
            foundIndex =i
        }
    }
    console.log(foundIndex);
}
solve([1,2,3,3])