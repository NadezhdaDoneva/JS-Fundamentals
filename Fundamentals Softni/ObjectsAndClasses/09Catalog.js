function solve(input){
    let inputL = input.length
    let sorted = input.sort()
    let listOfstock = []
    let objList = []
    
    for (let index = 0; index < inputL; index++) {
        let productInfo = sorted.shift()
        let nameAndprice = productInfo.split(' : ')
        let name = nameAndprice[0]
        let price = nameAndprice[1]
        listOfstock.push(name)
        let curObject = {
            name:name,
            price:price
        } 
        objList.push(curObject)
    }
    let sortedList = listOfstock.sort()
    console.log(sortedList[0].split(' ')[0][0]);
    console.log(`  ${listOfstock[0]}: ${objList[0].price}`);
    for (let i = 1; i < sortedList.length; i++) {
        if (sortedList[i-1].split(' ')[0][0]!==sortedList[i].split(' ')[0][0]) {
    console.log(sortedList[i].split(' ')[0][0]);
    console.log(`  ${listOfstock[i]}: ${objList[i].price}`);
        } else{
            console.log(`  ${listOfstock[i]}: ${objList[i].price}`);
        }
        
    }
}
solve([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])

    //better solution:
    function catalogue(array) {
        const products = {};
    
        for (const element of array) {
            let [product, price] = element.split(' : ');
            products[product] = price;
        }
    
        const sortedProducts = Object
            .keys(products)
            .sort((a, b) => a.localeCompare(b));
    
    
        let pastProduct = '';
    
        for (const product of sortedProducts) {
            if (!product.startsWith(pastProduct[0])) {
                console.log(product[0]);
            }
    
            pastProduct = product;
            console.log(`  ${product}: ${products[product]}`);
        }
    }