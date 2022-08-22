function solve(data) {
    let vip = []
    let normal = []
    let isParty = false

    for(let line of data){
        if (line == "PARTY"){
            isParty=true
            continue
        }
        let firstChar = Number(line[0])
        if(!isParty){
            if(isNaN(firstChar)){
                normal.push(line)
            } else{
                vip.push(line)
            }
        } else{
            if(isNaN(firstChar)){
                let index = normal.indexOf(line)
                normal.splice(index,1)
            }
            else{
                let index = vip.indexOf(line)
                vip.splice(index,1) 

            }
    
        }
    }
    let size = vip.length+normal.length
    console.log(size);
    for (const el of vip) {
        console.log(el);
    }
    for (const el of normal) {
        console.log(el);
        
    }
}
solve(['7IK9Yo0h',

'9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])