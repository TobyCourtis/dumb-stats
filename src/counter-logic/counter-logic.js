const max = 100 // 943356
const min = 50 //679542

// 9am EST is the time where the most humans are awake
const maxTime = new Date("Sat Feb 13 2021 09:00:00 GMT-0500")
let time = new Date()

export function counterInputVars(){
    time = new Date()
    var difference = Math.abs(time.getUTCHours() - maxTime.getUTCHours())   
    
    if (difference > 12){
        difference = 12 - difference%12
    }
    
    var numberOfPeople = max - difference*((max - min)/12)

    return {
        start: numberOfPeople,
        end: max
    }
}
