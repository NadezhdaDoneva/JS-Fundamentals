function solve(currStocks, forDelivery) {
    let storeProducts = {}
    let currLength = currStocks.length
    let forDeliveryL = forDelivery.length

    for (let index = 0; index < currLength; index+=2) {
        let product = currStocks[index]
        storeProducts[product] = Number(currStocks[index+1])        
    }
    for (let index = 0; index < forDeliveryL; index+=2) {
        let product = forDelivery[index]
        if(storeProducts.hasOwnProperty(product)){
            storeProducts[product]+=Number(forDelivery[index+1])
        }
        else{
            storeProducts[product]=0
            storeProducts[product]+=Number(forDelivery[index+1])
        }
    }
    console.log(storeProducts);
}
solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])