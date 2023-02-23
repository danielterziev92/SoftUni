function biggerHalf(elements) {
    const result = [...elements].sort((a, b) => a - b)
    return result.slice(result.length / 2);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);