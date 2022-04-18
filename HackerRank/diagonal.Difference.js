function diagonalDifference(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let difference = (arr[0][0] + arr[1][1] + arr[2][2]) - (arr[0][2] + arr[1][1] + arr[2][2]) 
            if (difference < 0) {
                difference = -difference
                return difference
            }
        }
    }
}
        
 
        
console.log(diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]))