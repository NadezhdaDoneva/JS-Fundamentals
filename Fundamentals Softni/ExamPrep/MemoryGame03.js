function solve(input) {
    let arr = input.shift().split(` `)
    let arr1 = Array.from(arr)
    let command = input.shift()
    let moves=0
    let win = false;
    let trAgn = true;

    while (command!=`end`) {
        moves++
        let indexes  = command.split(` `)
        let index1 = indexes.shift()
        let index2 = indexes.shift()
        let num1 = arr1[index1]
        let num2 = arr1[index2]


        if (index1==index2 || index1>=arr1.length || index2>=arr1.length || index1<0 || index2<0) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let middleIndex = Math.floor(arr1.length/2)
            let elementToAdd = `-${moves}a`
            arr1.splice(middleIndex,0,elementToAdd)
            arr1.splice(middleIndex,0,elementToAdd)
            trAgn = false
        }


        if(num1==num2){
            console.log(`Congrats! You have found matching elements - ${arr1[index1]}!`);
            arr1 = arr1.filter(e => e!== arr1[index1])
        } else {
            if(trAgn){
            console.log("Try again!");
            }
        }
        if(arr1.length==0){
            console.log(`You have won in ${moves} turns!`);
            win = true
            break
        }
        command=input.shift()
    }

    if(!win){
        console.log(`Sorry you lose :(`);
        console.log(arr1.join(' '));
    }
}
solve(  [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])