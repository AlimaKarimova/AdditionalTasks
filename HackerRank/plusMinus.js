function plusMinus(arr) {
    let countMinus=0;
    let countPlus=0;
    let countZero=0;
    for(let i in arr){
        if(arr[i]>0){
            countPlus++
        }else if(arr[i]<0){
            countMinus++
        }
        else {
            countZero++
        }
    }
    console.log(`${countPlus/arr.length.toFixed(6)}\n${countMinus/arr.length.toFixed(6)}\n${countZero/arr.length.toFixed(6)}`)


}
plusMinus([1,1,0,-1,-1])