import randomNormal from "random-normal";

const max = 943356
const min = 679542

function findSecondsFromDate(date){
    return (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + (date.getUTCSeconds())
}

// 9am EST is the time where the most humans are awake
const maxDateTime = new Date("Sat Feb 13 2021 09:00:00 GMT-0500")
const maxTimeInSeconds = findSecondsFromDate(maxDateTime)
const secondsInTwelveHours = 43200

export function currentNumberOfShaggers(){
    let timeNow = new Date()
    var difference = Math.abs(findSecondsFromDate(timeNow) - maxTimeInSeconds)

    if (difference > secondsInTwelveHours){
        difference = secondsInTwelveHours - difference%secondsInTwelveHours
    }

    var numberOfPeople = max - difference*((max - min)/secondsInTwelveHours)

    return numberOfPeople
}

export function addNoise(maxFluctuation){
    // +1 required so it's between 1 and max value not 0 and max value - 1

    const deviation = (currentNumberOfShaggers()/max)*10

    return randomNormal({mean: 0, dev: deviation})
}

