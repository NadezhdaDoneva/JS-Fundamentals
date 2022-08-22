function solve(input) {
    let passengers = Number(input.shift())
    let wagons = input.shift().split(' ').map(Number)
    if(passengers){
        for (let i = 0; i < wagons.length; i++) {
            let currWagon = wagons[i]
            while (currWagon !=4) {
                currWagon++
                passengers--
                if(passengers==0){
                    break
                }
            }
            wagons[i]=currWagon
            if (passengers ==0) {
                break
            }
        }
        let isFull = wagons.filter(w=>w!==4)
        if (isFull.length==0 && passengers==0){
            console.log(wagons.join(' '));
        } else if(isFull.length!=0){
            console.log(`The lift has empty spots!`);
            console.log(wagons.join(' '));
        } else{
            console.log(`There isn't enough space! ${passengers} people in a queue! `);
            console.log(wagons.join(' '));
        }
    }
}
solve([
    "15",
    "0 0 0 0 0"
   ])