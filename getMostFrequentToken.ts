interface tokens {
  [key: string]: number 
}
function getMostFrequentToken(prompt: string): string {
  const tokensObject: tokens = {}
  let mostFrequentToken: string = ""
  let numMostFrequentToken: number = 0
    const tokensArray: string[] = prompt.split("")
    

  tokensArray.forEach((caracter) => {
    if(caracter in tokensObject) {
      tokensObject[caracter]++
    } else {
        // forma mas rebuscada de agregar una nueva propiedad a un objeto pero funciona
        //Object.defineProperty(tokensObject, caracter, { value: 1, writable:true, configurable:true, enumerable:true })
        // esta es la ideal para este caso
        tokensObject[caracter] = 1
    }
  })

  Object.keys(tokensObject).forEach((caracter) => {
    if(tokensObject[caracter] > numMostFrequentToken) {
      numMostFrequentToken = tokensObject.caracter // esta linea es un bug, pero solo la incluimos en el desarrollo de la funcion para ver como funcionaba en cada ciclo
      mostFrequentToken = caracter
    }
  })

  return mostFrequentToken
}

console.log(getMostFrequentToken("abcABCabcd"))


// version mejorada con un solo loop

interface Tokens {
  [key: string]: number
}

function getMostFrequentTokenOptimizada(prompt: string): string {
  const tokensObject: Tokens = {}
  let mostFrequentToken = ""
  let maxCount = 0

  for (const char of prompt) {
    tokensObject[char] = (tokensObject[char] ?? 0) + 1

    if (tokensObject[char] > maxCount) {
      maxCount = tokensObject[char]
      mostFrequentToken = char
    }
  }

  return mostFrequentToken
}

console.log(getMostFrequentTokenOptimizada("abcABCabcd"))

// version mas optimizada usando Map
function getMostFrequentTokenConMap(prompt: string): string {
  const map = new Map<string, number>()
  let maxCount = 0
  let mostFrequent = ""

  for (const char of prompt) {
    const count = (map.get(char) ?? 0) + 1
    map.set(char, count)

    if (count > maxCount) {
      maxCount = count
      mostFrequent = char
    }
  }

  return mostFrequent
}
