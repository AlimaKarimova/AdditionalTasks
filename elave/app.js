// function marsExploration(s) {
//     let str=s.split('')
//     let count=0;
//     for(let i in str){
//         if(s[i]!="S" && s[i]!="O" ){
//             count++
//         }
//     }return count

// }
// console.log(marsExploration('SOSSPSSQSSOR'))

upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function camelcase(s) {
    let arr = s.match(/[A-Z]/g)
    return arr.length+1
}
console.log(camelcase('saveChangesInTheEditor'))