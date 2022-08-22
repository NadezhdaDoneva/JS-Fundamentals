function cinemaTickets(input) {
    let index = 0
    let command = input[index] //0
    index ++ //1
    let allSeats = Number(input[index]) //1
    let counterStudentTickets = 0
    let counterStandartTickets = 0
    let counterKidTickets = 0
    while (command!=="Finish") {
        index++ //2
        let ticketType = input[index] //2
        while (ticketType!=="End") {
            switch (ticketType) {
                case "standard": counterStandartTickets++
                break
                case "student": counterStudentTickets++
                break
                case "kid": counterKidTickets++
                break
            }
            allSeats--
            if (allSeats===0) {
                break
          }
          index++
        ticketType = input[index]
        }
        let boughtTickets = allSeats - (counterKidTickets+counterStandartTickets+counterStudentTickets)
        let percentageFull = (boughtTickets/allSeats)*100
                    console.log(`${command} - ${percentageFull.toFixed(2)}% full.`)
        index++
        command=input[index]
    }
} 
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])