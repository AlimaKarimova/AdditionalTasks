function diagonalDifference(arr) {
    for(let i in arr){
        let difference=`${(arr[0]+arr[4]+arr[8])-(arr[2]+arr[4]+arr[6])}`
        if(difference<0){
            difference=-difference
        }
        return difference
    }

}
console.log(diagonalDifference([11,2,4,4,5,6,10,8,-12]))
