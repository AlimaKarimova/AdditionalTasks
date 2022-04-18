function countApplesAndOranges(s, t, a, b, apples, oranges) {
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
        if (oranges[i] < 0) {
            if ((-oranges[i]) >= mesafeApelsinEv) {
                countOrange++

            }
        }
    }
    return `${countApple}\n${countOrange}`

}
console.log(countApplesAndOranges(7, 11, 5, 15, [-1, -2, -5], [-6, -6]))

// bu daha qisa yoldu:
// let sayA = 0;
//   let sayO = 0;
//   for (let i = 0; i < apples.length; i++) {
//     if (apples[i] + a >= s && apples[i] + a <= t) {
//       sayA++;
//     }
//   }
//   for (let j = 0; j < oranges.length; j++) {
//     if (oranges[j] + b >= s && oranges[j] + b <= t) {
//       sayO++;
//     }
//   }
//   return console.log( `${sayA}\n${sayO}`) 