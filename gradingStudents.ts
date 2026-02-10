function gradingStudents(grades: number[]): number[] {
    // Write your code here
    const LOWERLIMIT: number = 38
    const DIVISOR: number = 5
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] < LOWERLIMIT) {
            continue
        }
        if(grades[i] % 5 >= 3) {
            let rest: number = grades[i] % DIVISOR
            grades[i] = (grades[i] - rest) + DIVISOR
        }
    }
    return grades
}

/*
* reglas de redondeo
* si el numero es menor a 38 no redondeamos
* si la diferencia entre mi numero y el multiplo de 5 superior mas proximo es mayor o igual a 3 no redondeamos
* ej. 68 redondea a 70 porque la diferencia 70 - 68 = 2.
* ej. 52 no redondea a 55 porque la diferencia 55 - 52 = 3.
* ejemplo de input: [73, 67, 38, 33]
* ejemplo de output: [75, 67, 40, 33]
*/

// version mas clara y corta

function gradingStudents(grades: number[]): number[] {
    const LOWER_LIMIT = 38
    const DIVISOR = 5

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < LOWER_LIMIT) continue

        const rest = grades[i] % DIVISOR
        if (rest >= 3) {
            grades[i] += DIVISOR - rest
        }
    }

    return grades
}
