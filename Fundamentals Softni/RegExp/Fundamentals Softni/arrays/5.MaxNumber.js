function bl(array){
    let arrayL = array.length
    let newArray = []
    for (let i =0; i<arrayL; i++){
        let num1 = array[i]
        let isLarge = true
        for (let j = i+1; j < arrayL; j++) {
            let num2 = array[j];
            if (num1<=num2) {
                isLarge=false
            } else{
                isLarge=true
            }
        }
        if (isLarge) {
            newArray.push(num1)
        }
    }
    console.log(newArray.join(" "));
}
bl(42,42,1,20,9,5)