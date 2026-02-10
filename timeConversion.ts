function timeConversion(s: string): string {
    // Write your code here
    const AM: string = "AM"
    const PM: string = "PM"
    
    let hourArr: string[] = s.split(":")
    let hourArrNum: number[] = []
    let isAM: boolean = true
    
    if(hourArr[hourArr.length-1].includes(PM)) {
        hourArr[hourArr.length-1] = hourArr[hourArr.length-1].replace(PM, "")
        hourArrNum = hourArr.map((cadena) => parseInt(cadena))
        isAM = false
    } else {
        hourArr[hourArr.length-1] = hourArr[hourArr.length-1].replace(AM, "")
        hourArrNum = hourArr.map((cadena) => parseInt(cadena))
    }

    if(!isAM) {
        hourArrNum[0] = hourArrNum[0] == 12 ? 12 : hourArrNum[0] + 12
    } else {
        hourArrNum[0] = hourArrNum[0] == 12 ? 0 : hourArrNum[0]
    }
    console.log(hourArrNum)
    hourArrNum.forEach((obj, index) => {
        if(obj <= 9) {
            hourArr[index] = "0" + String(obj)
        } else {
            hourArr[index] = String(obj)
        }
    })
    // console.log(`${hourArr[0]}:${hourArr[1]}:${hourArr[2]}`)
    return `${hourArr[0]}:${hourArr[1]}:${hourArr[2]}`
    

}

// ejemplos de entrada y salida: s = 07:05:45PM => 19:05:45
// s = 12:01:00AM => 00:01:00
// s = 12:01:00PM => 12:01:00

/*
* version optimizada de ChatGPT
*/
function timeConversion(s: string): string {
    const isPM = s.includes("PM")

    let [hh, mm, ss] = s.replace("AM", "").replace("PM", "").split(":").map(Number)

    if (isPM) {
        hh = hh === 12 ? 12 : hh + 12
    } else {
        hh = hh === 12 ? 0 : hh
    }

    return [
        hh.toString().padStart(2, "0"),
        mm.toString().padStart(2, "0"),
        ss.toString().padStart(2, "0")
    ].join(":")
}
