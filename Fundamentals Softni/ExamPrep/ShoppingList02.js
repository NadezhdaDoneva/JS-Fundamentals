function solve(input) {
    let list = input.shift().split('!')
    let command = input.shift()
    while (command!="Go Shopping!") {
        command = command.split(' ')
        let action = command[0]
        let product = command[1]
        switch (action) {
            case `Urgent`:
                if(!list.includes(product)){
                    list.unshift(product)
                }
                break;

            case `Unnecessary`:
                if(list.includes(product)){
                    let index = list.indexOf(product)
                    list.splice(index,1)
                }
                break;

            case `Correct`:
                let newItem = command[2]
                if(list.includes(product)){
                    let i = list.indexOf(product)
                    list.splice(i,1,newItem)
                }
                break
                ;
            case `Rearrange`:
                if(list.includes(product)){
                    let j = list.indexOf(product)
                    list.splice(j,1)
                    list.push(product)
                }
                break;
        }
        command = input.shift()
    }
    console.log(list.join(', '));
}
solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])