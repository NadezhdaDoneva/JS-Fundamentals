function solve(input) {
    let obj = {}
    for(let line of input){
        let command = line.split(', ')
        let action = command[0]
        let carNum = command[1]
        if(action=='OUT'){
        if(obj.hasOwnProperty(carNum)){
            delete obj[carNum]
        }
    }
        if (action=="IN") {
            obj[carNum]=0
        }
    }
    let sortedPArking = Object.entries(obj).sort()
    if(sortedPArking.length==0){
        console.log("Parking Lot is Empty");
    }
    else{
    for([key,value] of sortedPArking){
        console.log(key);
    }
}
}
solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])