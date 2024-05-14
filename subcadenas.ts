function splitPrefixSuffix(categories: string, k: number): number {
    let contador: number = 0;
    const returnFinal: number = 0;

    if (k == 0) {
        return returnFinal;
    } else if (k == 27) {
        return returnFinal;
    } else if (categories.length == 0) {
        return returnFinal;
    } else {
        // 1.- formateamos a minusculas
        const stringToLowercase: string = categories.toLocaleLowerCase();
        // 2.- creamos un array del parametro categories
        const arrayOfCategories: string[] = stringToLowercase.split('');

        // 3.- creamos un nuevo array con el primer elemento de arrayOfCategories, a este array le vamos a ir agregando los demas elementos de arrayOfCategories
        // mas adelante
        let helperArrrayCategories: (string | undefined)[] = new Array(arrayOfCategories[0]);
        // 4.- creamos un nuevo array con todos los elementos de arrayOfCategories menos el primero, a este array le iremos quitando cada primer elemento mas adelante
        let helperCategories: (string | undefined)[] = arrayOfCategories.slice(1)

        for (let index = 0; index < arrayOfCategories.length - 2; index++) {
            let retorno = iterarArrays(helperArrrayCategories, helperCategories)
            if (retorno > k) {
                contador++;
            }
            helperArrrayCategories.push(helperCategories[0]);
            helperCategories.shift();
        }
        return contador
    }

    // return returnFinal;
}

function iterarArrays(array1: (string | undefined)[], array2: (string | undefined)[]): number {
    let contador: number = 0;
    let set1 = new Set<(string | undefined)>(array1)
    let set2 = new Set<(string | undefined)>(array2)
    set1.forEach(item => {
        if (set2.has(item)) {
            contador++;
        }
    });
    return contador;
}

console.log('resultado de la funcion: ', splitPrefixSuffix('adbccdbada', 2))
console.log('resultado de la funcion: ', splitPrefixSuffix('abbcac', 1))
console.log('resultado de la funcion: ', splitPrefixSuffix('wxyzzyxw', 1))
