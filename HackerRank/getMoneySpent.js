function getMoneySpent(keyboards, drives, b) {
    let max = 0;
    for (let i in keyboards) {
        for (let j in drives) {
            if (keyboards[i] + drives[j] < b) {
                if (keyboards[i] + drives[j]>max) {
                    max = keyboards[i] + drives[j]
                }
            }
        
        }
    } 
    if(max){
        return max
    }else{
        return -1
    }

}
console.log(getMoneySpent([3, 1], [5, 2, 8], 10))