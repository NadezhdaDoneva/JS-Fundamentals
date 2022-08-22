function solve(input) {
    let items = input.shift().split(`, `);
    let command = input.shift();
    while(command!==`Craft!`){
        let tokens = command.split(" - ");
        let action = tokens[0]
        let stuff = tokens[1]
        switch (action) {
            case `Collect`:
                if (!items.includes(stuff)){
                    items.push(stuff)
                }
                break;
        
            case `Drop`:
                if (items.includes(stuff)){
                    let index = items.indexOf(stuff)
                    items.splice(index,1)
                }
                break;
            case `Combine Items`:
                let stuffSplit = stuff.split(':')
                let oldItem = stuffSplit.shift()
                let newItem = stuffSplit.shift()
                if(items.includes(oldItem)){
                    let i = items.indexOf(oldItem)
                    items.splice(i+1,0,newItem)
                }
                break;
            case `Renew`:
                if (items.includes(stuff)){
                    let k = items.indexOf(stuff)
                    items.splice(k,1)
                    items.push(stuff)
                }
                break;
        }
        command = input.shift();
    }
    console.log(items.join(`, `));
}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])