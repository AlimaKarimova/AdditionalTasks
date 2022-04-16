function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let m = apples.length;
    let n = oranges.length;
    let countApple = 0;
    let countOrange = 0;
    let mesafeAlmaEv = s-a;
    let mesafeApelsinEv = b - t;
    for (let i = 0; i < m; i++) {
        if (apples[i] > 0) {
            if (apples[i] >= mesafeAlmaEv) {
                countApple++
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (oranges[i] <= 0) {
            if (oranges[i] <= mesafeApelsinEv) {
                countOrange++

            }
        }
    }
    return `${countApple} ${countOrange}`

}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))