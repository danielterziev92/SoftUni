// function biggestElement(arrs) {
//
//     function getMaxNumber(arrs) {
//         let result = [];
//
//         function getAllNumber(arr) {
//             for (let element of arr) {
//                 if (Array.isArray(element)) {
//                     getAllNumber(element);
//                 } else {
//                     result.push(element);
//                 }
//             }
//         }
//
//         getAllNumber(arrs);
//
//         return Math.max(...result);
//     }
//
//     return getMaxNumber(arrs);
// }

function biggestElement(arrs) {
    let allBiggestNumber = arrs.map((x) => Math.max(...x));
    let biggestNumber = Math.max(...allBiggestNumber);
    return biggestNumber;
}


console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4, 169]]));