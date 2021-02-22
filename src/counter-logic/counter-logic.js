const max = 943356
const min = 679542

// 9am EST is the time where the most humans are awake
const maxTime = new Date("Sat Feb 13 2021 09:00:00 GMT-0500")
let time = new Date()

export function currentNumberOfShaggers(){
    time = new Date()
    var difference = Math.abs(time.getUTCHours() - maxTime.getUTCHours())

    if (difference > 12){
        difference = 12 - difference%12
    }

    var numberOfPeople = max - difference*((max - min)/12)

    return numberOfPeople
}
