// function simpleArraySum() {
//     let arr=[1, 2, 3, 4, 10, 11]
//     let s = 0;
//     for (i = 0; i < arr.length; i++) {
//         s += arr[i]
//     }
//     return s
// }
// console.log(simpleArraySum())

// console.log(rotLeft([1, 2, 3, 4, 5], 3))
// function countryCityCount(object) {
//     let obj = {};
//     let countryArrCity = Object.values(object);
//     let countryArrName = Object.keys(object);
//     let countryArrAll = Object.entries(object);
//     for (let i = 0; i < countryArrCity.length; i++) {
//       obj[`"${countryArrName[i]}"`] = countryArrCity[i].length;
//     }
//     return console.log(obj);
//   }
//   countryCityCount(countries);


// function isValid(s) {
//     let sum = [];
//     const arr = s.split('')
//     return arr
// }
// console.log(isValid('aabcd'))

// function rotLeft(a, d) {
//     let n = a.length
//     for (let i = 0; i < n; i++) {
//         i = i-d
//     }return a[i]

// }
// console.log(rotLeft([1, 2, 3, 4, 5], 3))
// let k=50;
// let prices=[1, 12, 5, 111, 200, 1000, 10]

// function maximumToys(prices, k) {
//     let sum =0;
//     for(let i=0;i<prices.length;i++){
//         sum+=prices[i]
//         if(sum<k){
//             return sum.length

//         }
//     }
// }
// console.log(maximumToys(prices,k))

let a= "Hello"
a[0]= "b"
console.log(a)
