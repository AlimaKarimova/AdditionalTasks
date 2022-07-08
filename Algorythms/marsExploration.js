// hamisina duz gelmir


function marsExploration(s) {
    let arr=s.split("")
    let sCount=0;
    let oCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='S'){
            sCount++

        }
    }
    // return sCount
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='O'){
            oCount++

        }
    }
    return `${(s.length/3*2-sCount)+(s.length/3-oCount)}`

}

console.log(marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'))


