function pipesInPool (input) {
    let volumePool = Number(input[0])
    let p1 = Number(input[1])
    let p2 = Number(input[2])
    let hours = Number(input[3])

    let p1Filled = p1*hours
    let p2Filled = p2*hours
    let totalFilled = p1Filled+p2Filled

    let percentFullPool = (p1Filled+p2Filled)*100/volumePool
    let percentP1Filled = p1Filled*100/totalFilled
    let percentP2Filled = p2Filled*100/totalFilled

    if (totalFilled>volumePool) {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${totalFilled-volumePool.toFixed(2)} liters.`)
    } else {
        console.log(`The pool is ${percentFullPool.toFixed(2)}% full. Pipe 1: ${percentP1Filled.toFixed(2)}%. Pipe 2: ${percentP2Filled.toFixed(2)}%.`)
    }
}
pipesInPool (["1000", "100", "120", "3"])