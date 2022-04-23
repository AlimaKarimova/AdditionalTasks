// function camelcase(s) {
//     let arr = s.match(/[A-Z]/g)
//     return arr.length+1
// }
// console.log(camelcase('saveChangesInTheEditor'))
// duzdu
function camelcase(s) {
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr=[];
    for(let i in s){
        for(let j in upper_case){
            if(s[i]==upper_case[j]){
                arr.push(s[i])
            }
        }
    }
    return arr.length+1

}
console.log(camelcase('saveChangesInTheEditor'))