function inventory(input) {
    let items = input.shift().split(', ');
 
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" - ");
        let command = token[0];
        let element = token[1];
        let index = items.indexOf(element)
 
        switch (command) {
            case "Collect":
                if (items.includes(element)) {
                    break;
                } else if (index < 0) {
                    items.push(element)
                }
                break;
 
            case "Drop":
                if (items.includes(element)) {
                    let itemDrop = items.indexOf(element);
                    items.splice(itemDrop, 1)
                } 
                break;
                
            case "Combine Items":
                let elementSplit = element.split(":");
                let oldWord = elementSplit.shift();
                let newWord = elementSplit.shift();
                index = items.indexOf(oldWord);
                if (index >= 0) {
                    items.splice(index + 1, 0, newWord)
                } 
                break;
 
            case "Renew":
 
                if (index >= 0) {
                    items.splice(index, 1);
                    items.push(element)
                }
                break;
        }
        if (token[0] === "Craft!") {
            items.join(", ")
        }
    }
    console.log(items.join(", "))
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])