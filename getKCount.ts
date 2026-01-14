'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}


/*
 * Complete the 'getKCount' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER s as parameter.
 dado un numero s, encontrar un numero k, siendo k el numero de veces que puedo obtener s sumando de manera consecutiva de 1 a s.
 es decir 1 + 2 + 3 + 4 +...
 2 + 3 + 4 + 5 +...
 3 + 4 + 5 + 5 +...
 */

function getKCount(s: number): number {
    // Write your code here
    //console.log("array: ", poblateArray(s))
    if (s < 1){
        return 0
    }
    
    let k: number = 0
    let counter: number = 0
    let finish = 1
    while (finish <= s){
        for(let i = finish; i <= s; i++){
        console.log(`i: ${i}`)
        counter += i
        console.log(`counter: ${counter}`)
        
        if(counter == s) {
            k++
            console.log(`k: ${k}`)
            counter = 0
            break
        }
        else if(counter > s){
            counter = 0
            break
        }
    }
    finish++
    }
    
    return k
}


// version mejorada de la funcion
function getKCount(s: number): number {
  let count = 0;

  for (let k = 1; (k * (k - 1)) / 2 < s; k++) {
    const numerator = s - (k * (k - 1)) / 2;

    if (numerator % k === 0) {
      const a = numerator / k;
      if (a > 0) count++;
    }
  }

  return count;
}
console.time("timegetKCount")
let response: number = getKCount(125)
console.timeEnd("timegetKCount")
console.log(response)
  
// function poblateArray(s: number): number[] {
//     let counter: number = 1
//     let arrNumber: number[] = []
//     while (counter <= s) {
//         arrNumber.push(counter)
//     }
//     return arrNumber
// }
function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: number = parseInt(readLine().trim(), 10);

    const result: number = getKCount(s);

    ws.write(result + '\n');

    ws.end();
}
