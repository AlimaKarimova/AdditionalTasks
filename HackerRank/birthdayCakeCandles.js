function birthdayCakeCandles(candles) {
    let max = 0;
    let sum=0;
    for (let i = 0; i < candles.length; i++) {
        if (max < candles[i]) {
            max = candles[i]
        }
    }
    for(let j in candles){
        if(max==candles[j]){
            sum++
        }
    }
    return sum
}
console.log(birthdayCakeCandles([3,1,2,3]))