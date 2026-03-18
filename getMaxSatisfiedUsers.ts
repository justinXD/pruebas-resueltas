//problema de sliding window

function getMaxSatisfiedUsers(viewers: number[], unstable: number[], minutes: number): number {
    
    let baseSatisfied = 0

    // usuarios satisfechos naturalmente
    for (let i = 0; i < viewers.length; i++) {
        if (unstable[i] === 0) {
            baseSatisfied += viewers[i]
        }
    }

    let extraSatisfied = 0
    let windowSum = 0

    // primera ventana
    for (let i = 0; i < minutes; i++) {
        if (unstable[i] === 1) {
            windowSum += viewers[i]
        }
    }

    extraSatisfied = windowSum

    // sliding window
    for (let i = minutes; i < viewers.length; i++) {

        if (unstable[i] === 1) {
            windowSum += viewers[i]
        }

        if (unstable[i - minutes] === 1) {
            windowSum -= viewers[i - minutes]
        }

        extraSatisfied = Math.max(extraSatisfied, windowSum)
    }

    return baseSatisfied + extraSatisfied
}
