function solve(input) {
    let obj = {}
    let res = ''
    let list = input.split(' ')
    for (const word1 of list) {
        let word = word1.toLowerCase()
        if (obj.hasOwnProperty(word)) {
            obj[word] = obj[word]+1
        } else{
            obj[word]=1
        }
    }
    let filterRes = Object.entries(obj).filter(([key,value])=>{
        return value%2!== 0
    })
    for(let [key, value] of filterRes){
        res +=key+' '
    }
    console.log(res);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')