// mi solucion sobrepensada pero funciona
function breakingRecords(scores: number[]): number[] {
    // Write your code here
    let lowest: number = 0
    let highest: number = 0
    let counterLowest: number = 0
    let counterHighest: number = 0
    
    
    if(scores[0] > scores[1]) {
        lowest = scores[1]
        highest =  scores[0]
        counterLowest++
    } else if(scores[1] > scores[0]) {
        highest = scores[1]
        lowest = scores[0]
        counterHighest++
    } else {
        lowest = scores[0]
        highest = scores[0]
    }
    
    
    console.log("scores: ", scores)
    console.log("lowest: ", lowest)
    console.log("highest: ", highest)
    
    for(let i = 2; i < scores.length; i++) {
        if(scores[i] > highest) {
            highest = scores[i]
            counterHighest++
        }
        if(scores[i] < lowest) {
            lowest = scores[i]
            counterLowest++
        }
    }
    
    return [counterHighest, counterLowest]
}

// solucion optimizada
function breakingRecords(scores: number[]): number[] {
    let lowest = scores[0]
    let highest = scores[0]
    
    let counterLowest = 0
    let counterHighest = 0
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i]
            counterHighest++
        } else if (scores[i] < lowest) {
            lowest = scores[i]
            counterLowest++
        }
    }
    
    return [counterHighest, counterLowest]
}
