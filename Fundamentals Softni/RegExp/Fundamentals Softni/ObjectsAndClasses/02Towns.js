function solve(input) {
    let currTown = {}
    for (const townData of input) {
        let townElements = townData.split(` | `)
        let townName = townElements[0]
        let townLatitude = Number(townElements[1])
        let townLongtitude = Number(townElements[2])

        currTown.town = townName
        currTown.latitude = townLatitude.toFixed(2)
        currTown.longitude = townLongtitude.toFixed(2)
        console.log(currTown);
    }
}
solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])