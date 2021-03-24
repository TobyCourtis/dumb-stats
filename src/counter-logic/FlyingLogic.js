import randomNormal from "random-normal";

const max = 100
const min = 1

function findSecondsFromDate(date){
    return (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + (date.getUTCSeconds())
}

// 9am EST is the time where the most humans are awake
const maxDateTime = new Date("Sat Feb 13 2021 09:00:00 GMT-0500")
const maxTimeInSeconds = findSecondsFromDate(maxDateTime)
const secondsInTwelveHours = 43200

export function currentNumberOfFlyers(){
    return 24576
}

export function addNoise(maxFluctuation){
    const deviation = (currentNumberOfFlyers()/max)*10

    return randomNormal({mean: 0, dev: deviation})
}