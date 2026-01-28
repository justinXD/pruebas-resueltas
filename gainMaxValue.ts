// primera solucion con complijidad O(n^2/k) no optimo
// tampoco contempla los numeros negativos

function gainMaxValue(game_val: number[], k: number): number {
  let a: number = 0
  let maxValue: number = 0

  for(let i = 0; i < game_val.length; i++) {
    a = 0
    for(let j = i; j < game_val.length; j+=k) {
      if (game_val[j] == undefined) {
        break
      }
      a += game_val[j]
    }
    if (a > maxValue) {
      maxValue = a
    }
  }
  return maxValue
}

// version optimizada O(n) y contempla casos negativos
function gainMaxValue(game_val: number[], k: number): number {
  if (game_val.length === 0) return 0
  // creamos un nuevo array de longitud k y lo llenamos con 0
  const sums = new Array(k).fill(0)

  // O(n
  // el modulo o residuo i % k tiene una longitud k, entonces solo hay k posibilidades de suma y una de esas es la mas alta
  // si k = 2, entonces los modulos posibles son 0 y 1. Para k = 3 los modulos posibles son 0, 1 y 2
  for (let i = 0; i < game_val.length; i++) {
    sums[i % k] += game_val[i]
  }
  // sacamos el numero mas alto en sum, funciona incluso si todos los elementos de sum son negativos
  let maxValue = Math.max(...sums)

  return maxValue
}
