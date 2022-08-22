function solve(input) {
    let quantityFood = Number(input[0])*1000
    let quantityHay = Number(input[1])*1000
    let quantityCover = Number(input[2])*1000
    let weight = Number(input[3])*1000
    let dayCounter =1
    let days30 = false

    while (quantityFood>=300 && quantityHay>=0.05*quantityFood && quantityCover>=weight*1/3) {
        quantityFood-=300
        if(dayCounter%2==0){
            quantityHay-=0.05*quantityFood
        }
        if(dayCounter%3==0){
            quantityCover-=weight*1/3
        }
        dayCounter++
        if (dayCounter==31) {
            days30 = true
            break
        }
    }

    if (days30) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood/1000).toFixed(2)}, Hay: ${(quantityHay/1000).toFixed(2)}, Cover: ${(quantityCover/1000).toFixed(2)}.`);
    }else{
        console.log(`Merry must go to the pet store!`);
    }
}
solve(["1", 
"1.5", 
"3", 
"1.5"
])