function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here
    let applesBetweenST: number = 0
    let orangesBetweenST: number = 0
    const applesDistances: number[] = apples.map((distance) => a + distance)
    const orangesDistance : number[] = oranges.map((distance) => b + distance)
    
    applesDistances.forEach((distance) => {
        if(distance >= s && distance <= t) {
            applesBetweenST++
        }
    })
    orangesDistance.forEach((distance) => {
        if(distance >= s && distance <= t) {
            orangesBetweenST++
        }
    })
    
    console.log(applesBetweenST)
    console.log(orangesBetweenST)

}

/*
calculamos las manzanas y las naranjas que caen dentro del segmento st calculando la diferencia entre la distancia recorrida por cada fruta
y la distancia de cada arbol al segmento st
*/

// otra version con misma complegidad sin arrays intermedios
function countApplesAndOranges(
    s: number,
    t: number,
    a: number,
    b: number,
    apples: number[],
    oranges: number[]
): void {

    let applesBetweenST = 0
    let orangesBetweenST = 0

    for (const distance of apples) {
        const finalPosition = a + distance
        if (finalPosition >= s && finalPosition <= t) {
            applesBetweenST++
        }
    }

    for (const distance of oranges) {
        const finalPosition = b + distance
        if (finalPosition >= s && finalPosition <= t) {
            orangesBetweenST++
        }
    }

    console.log(applesBetweenST)
    console.log(orangesBetweenST)
}
// si s = 7, t = 11, a = 5, b = 15, apples = [-2, 2, 1] y oranges = [5, -6]
// nuestro resuldado debe ser
// 1
// 1
