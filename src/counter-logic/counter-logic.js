const max = 100 // 943356
const min = 50//679542

const maxTime = new Date('July 13, 1970 09:00:00 EST+00:00')

const time = new Date('July 13, 1970 15:00:00 EST+00:00')
// use date now for production build
// const time = new Date()

export function counterInputVars(){

    var difference = Math.abs((time.getHours() - maxTime.getHours()))%12

    var numberOfPeople = max - difference*((max - min)/12)

    return {
        start: numberOfPeople,
        end: max
    }
}
