function number100to200 (input){
    let number = Number(input[0])
    if (number>200) {
        console.log("Greater than 200")
    } else if (number>=100) {
        console.log("Between 100 and 200")
    } else {
        console.log("Less than 100")
    }
}
number100to200(["34"])