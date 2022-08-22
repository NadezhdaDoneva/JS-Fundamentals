function solve(input) {
    let totalSum = 0
    let reggex = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>\w+)>[^$%|.]*\|(?<count>\d+)\|(?<price>\d+\.\d+)?\$/g
    let i =0
    let text = input[i]
    
    let currLine = reggex.exec(text)

    while (text!='end of shift') {
        if(currLine!=null){
        let currPrice = Number(currLine.groups.count)*Number(currLine.groups.price)
        console.log(`${currLine.groups.name}: ${currLine.groups.product} - ${currPrice.toFixed(2)}`);
        totalSum+=currPrice
        }
        i++
        text=input[i]
        currLine=reggex.exec(text)
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])

function softUniBarIncome(input) {
    let totalSum = 0;
   
    for (const info of input) {
      if (info === "end of shift") {
        break;
      }
      let match = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*[|](?<count>\d+)[|][^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
      let person = match.exec(info);
      if (person != null) {
          let sum = Number(person.groups['price']) * Number(person.groups['count']);
          console.log(`${person.groups['customerName']}: ${person.groups['product']} - ${sum.toFixed(2)}`);
          totalSum += sum;
      }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
  }
  softUniBarIncome(['%George%<Croissant>|2|10.3$',

  '%Peter%<Gum>|1|1.3$',
  
  '%Maria%<Cola>|1|2.4$',
  
  'end of shift'])