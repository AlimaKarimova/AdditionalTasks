function miniMaxSum(arr) {
    let min;
    let m;
    let max = 0;
    let sum = 0;
    for (let i in arr) {
        sum += arr[i];
        if (arr[i] >= max) {
            max = arr[i];
        };
        m = arr[0]
        if (arr[i] <= m) {
            m= arr[i];
            min = m
        };
    }
    console.log(`${sum - max} ${sum - min}`)

}
miniMaxSum([7, 69, 2, 221, 8974])