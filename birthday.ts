// problema de sliding window
// obtener de cuantas manera podemos dividir un array mientras
// la longitud de los sub arrays sea igual a m y
// la suma de los sub arrays debe ser igual a d

function birthday(s: number[], d: number, m: number): number {
    // Write your code here
    let contador: number = 0
    for(let i = 0; i < s.length; i++) {
        let currentNumber: number = s[i]
        for(let j = 1; j < m; j++) {
            currentNumber += s[i + j]
        }
        if(currentNumber == d) contador++
    }
    return contador
}

// version optimizada
// OJO 👀 para este patron primero determinemos el valor inicial de la primera ventana
function birthday(s: number[], d: number, m: number): number {
    let contador = 0
    let windowSum = 0

    // 👀👀👀
    // suma inicial de la primera ventana con for de 0 hasta i < m
    for (let i = 0; i < m; i++) {
        windowSum += s[i]
    }

    // evaluamos si se cumple la condicion en la primera ventana
    if (windowSum === d) contador++

    👀👀👀👀
    // deslizar la ventana
    // esto se logra al sumar el nuevo valor y despues restar lo que queda fuera
    // de la ventana al haberla deslizado
    for (let i = m; i < s.length; i++) {
        windowSum += s[i]        // entra nuevo
        windowSum -= s[i - m]    // sale viejo
    
        if (windowSum === d) contador++
    }
    
    return contador
}
