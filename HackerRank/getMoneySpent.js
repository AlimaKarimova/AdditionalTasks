function getMoneySpent(keyboards, drives, b) {
    let maxKey = 0;
    let maxDri = 0;
    for (let x = 0; x < keyboards.length; x++) {
        if (maxKey < keyboards[x]) {
            maxKey = keyboards[x]

        }
    }
    for (let y = 0; y < drives.length; y++) {
        if (maxDri < drives[y]) {
            maxDri = drives[y]
        }
    }

    if ((maxDri + maxKey)<=b) {
        return maxDri+maxKey 
    } else {
        return -1
    }

}
console.log(getMoneySpent([40, 55, 60], [5, 8, 10], 71))