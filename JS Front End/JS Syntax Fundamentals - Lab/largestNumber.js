function largestNumber(numbOne, numbTwo, numbTree) {
    let result = Math.max(numbOne, numbTwo, numbTree)
    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);