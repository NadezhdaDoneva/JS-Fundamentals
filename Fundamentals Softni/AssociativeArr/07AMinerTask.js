function solve(data) {
    let obj = {}
    let dataL = data.length
    for (let i=0; i<dataL; i++){
        let material = data[i]
        i++
        let quantity = data[i]
        if(!obj.hasOwnProperty(material)){
            obj[material] = []
            obj[material].push(quantity)
        } else{
            obj[material].push(quantity)
        }
    }
    console.log(obj);
    for (let [key,value] of obj) {
        let sum=0
        for(let val of value){
            sum+=val
        }
        console.log(`${key} : ${sum}`);
    }
}
solve([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])