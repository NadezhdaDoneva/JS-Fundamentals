function solve(arr) {
    let obj = {};
 
    for (const info of arr) {
        let [companyName, employeeId] = info.split(' -> ');
        if (!obj[companyName]) {
            obj[companyName] = new Set();
        }
        obj[companyName].add(employeeId);
    }  
    let entries = Object.entries(obj);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
 
    for (const [company, id] of entries) {
        console.log(`${company}`);
        let set = new Set(id)
        for (let id of set) {
            console.log(`-- ${id}`);
        }
    }
}
solve([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])