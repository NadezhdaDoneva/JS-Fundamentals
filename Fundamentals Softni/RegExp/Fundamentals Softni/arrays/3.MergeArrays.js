function solve(firstArr, secondArr) {
    let firstArrL = firstArr.length
    let newArr = []
    let elm
    for (let i = 0; i < firstArrL; i++) {
        if(i%2==0){
             elm = Number(firstArr[i]) + Number(secondArr[i])
        } else{
             elm = firstArr[i]+secondArr[i]
        }
        newArr.push(elm)
    }
    console.log(newArr.join(" - "))
}
solve(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])