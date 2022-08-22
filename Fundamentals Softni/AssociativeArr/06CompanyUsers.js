function solve(data) {
    let companies = {}
    let isThere = false
    for (const line of data) {
        let [companyName, employeeID] = line.split(' -> ')
        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = []
            companies[companyName].push(employeeID)
        } else{
            for (const value of companies[companyName]) {
                if(value==employeeID){
                    isThere = true
                } 
                if(!isThere){
                    companies[companyName].push(employeeID)
                }
            }
        }
    }
    let entries = Object.entries(companies)
    entries.sort((a,b)=>a[0].localeCompare(b[0]))
    for (const [key,value] of entries) {
        console.log(`${key}`);
        for(let val of value){
            console.log(`-- ${val}`);
        }
    }
    
}
solve([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])