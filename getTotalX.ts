// obtenemos cuantos divisores enteron tenemos ente el limite superior de a y el limite inferior de b incluyendo estos mismos numeros
// complejidad aproximada O(rango(a*b))
function getTotalX(a: number[], b: number[]): number {
    // Write your code here
    // limite inferior entre los dos arrays
    const seed: number = a[a.length - 1]
    const upperLimit: number = b[0]
    let possibleIntegersBetweenArrays: number[] = []
    const abArr: number[] = [...a, ...b]
    
    for(let i = seed; i <= upperLimit; i += seed) {
        // crear el otro for aqui con el super array y validarlos aqui
        // i es el numero a evaluar en abArr como numerador o denominador
        let count: number = 0
        for(const num of abArr) {
            // evaluamos si num > i
            if(num > i) {
                if(num % i == 0) {
                    count++
                }
            } else {
                if(i % num == 0) {
                    count++
                }
            }
        }
        if(count == abArr.length) {
            possibleIntegersBetweenArrays.push(i)
        }
        
    }
    
    return possibleIntegersBetweenArrays.length
}

// solucion optimizada de chatGPT calculando el MCM (Minimo Comun Multiplo) y el MCD (Maximo Comun Divisor)
// funciones auxiliares
// maximo comun divisor
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b)
}

// minimo comun multiplo
function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b)
}

// complejidad aproximada O(GCD/LCM)
function getTotalX(a: number[], b: number[]): number {

    // 1️⃣ LCM de todo el array a
    let lcmA = a[0]
    for (let i = 1; i < a.length; i++) {
        lcmA = lcm(lcmA, a[i])
    }

    // 2️⃣ GCD de todo el array b
    let gcdB = b[0]
    for (let i = 1; i < b.length; i++) {
        gcdB = gcd(gcdB, b[i])
    }

    // 3️⃣ Contar múltiplos válidos
    let count = 0
    for (let multiple = lcmA; multiple <= gcdB; multiple += lcmA) {
        if (gcdB % multiple === 0) {
            count++
        }
    }

    return count
}
