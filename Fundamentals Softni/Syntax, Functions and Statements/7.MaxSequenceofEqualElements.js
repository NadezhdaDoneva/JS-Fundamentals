function solve(array) {
    let maxSeqence = [];
    for (let i = 0; i < array.length; i++) {
        let currentSeq = [];
        for (let j = i; j < array.length; j++) {
            if(array[i]==array[j]){
                currentSeq.push(array[i])
            }else{
                break;
            }
            
        }
        if(currentSeq.length>maxSeqence.length){
            maxSeqence=currentSeq
        }
    }
    console.log(maxSeqence.join(" "));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])