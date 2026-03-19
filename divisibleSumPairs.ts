// solucion de fuerza bruta
function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    // Write your code here
    let contador: number = 0
    for(let i = 0; i < n - 1; i++){
        console.log("i: ", i)
        for(let j = i + 1; j < n; j++) {
            console.log("j: ", j)
            // console.log("ar[i]: ", ar[i])
            // console.log("ar[j]: ", ar[j])
            if((ar[i] + ar[j]) % k == 0) {
                console.log("arr: ", [ar[i], ar[j]])
                contador ++
            }
        }
    }
    return contador

}

// solucion optimizada

function divisibleSumPairs(n: number, k: number, ar: number[]): number {

    const freq = new Array(k).fill(0)
    let count = 0

    for (let i = 0; i < n; i++) {

        const remainder = ar[i] % k
        const complement = (k - remainder) % k

        count += freq[complement]

        freq[remainder]++
    }

    return count
}
