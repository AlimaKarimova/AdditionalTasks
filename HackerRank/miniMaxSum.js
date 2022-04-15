"use strict"
// function miniMaxSum(arr) {
//     let minSum = 0;
//     let maxSum=0;
//     let result = []
//     let sortArray = arr.sort(function (a, b) {
//         return a - b
//     })
//     let len = sortArray.length
//     for (let i = 0; i < arr.length; i++) {
//         if (i < len - 1) {
//             minSum += sortArray[i]
//         } else {
//             maxSum = sortArray[i] + minSum -sortArray[0]
//         }
//     }
//     result.push(minSum, maxSum)
//     return result

// }
// console.log(miniMaxSum([1, 10, 3, 4,5]))

function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
    let min = +Infinity;
    let max = -Infinity;
    let sum = 0;
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }

    }
    result.push(sum-max,sum-min)
    console.log(result);
}
miniMaxSum([1, 3, 5, 7, 9])