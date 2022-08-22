function solve(input) {
    let heroesList = []
    let inputL = input.length
    for (let i = 0; i < inputL; i++) {
        let curHeroInfo = input.shift()
        let tokens = curHeroInfo.split(' / ')
        let name = tokens[0]
        let level = tokens[1]
        let items = tokens[2]
        let curHero = {
            name:name,
            level:Number(level),
            items:items
        }
        heroesList.push(curHero)
        
    }
    let sorted = heroesList.sort((a,b) =>{
        return a.level - b.level
    })
    for (const hero of sorted) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])