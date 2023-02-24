function smallestTwoNumbers(elements) {
    const [first, second, ...rest] = elements.sort((a, b) => a - b);
    console.log(first, second);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);