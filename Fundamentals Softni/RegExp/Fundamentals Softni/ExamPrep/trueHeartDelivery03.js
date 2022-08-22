function heart(arr) {
    let neighbourhood = arr[0].split('@').map(Number);
    let index = 0;
 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 'Love!') {
            break;
        }
 
        let [command, length] = arr[i].split(' ');
        length = Number(length);
        index += length;
        if (index >= neighbourhood.length) {
            index = 0;
        }
        if (neighbourhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            neighbourhood[index] -= 2;
            if (neighbourhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
 
    }
 
 
    console.log(`Cupid's last position was ${index}.`);
    let countValentineDays = 0;
    let failedDays = 0;
    for (const element of neighbourhood) {
        if (element === 0) {
            countValentineDays++;
        } else {
            failedDays++;
        }
    }
    if (countValentineDays === neighbourhood.length) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${failedDays} places.`);
    }
 
 
 
}
heart(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])