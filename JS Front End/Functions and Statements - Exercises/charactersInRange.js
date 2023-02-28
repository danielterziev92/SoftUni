function characters(start, end) {
    function charactersInRange(start, end) {
        const result = [];
        for (let i = start + 1; i < end; i++) {
            result.push(String.fromCharCode(i));
        }
        return result;
    }

    const startIndex = start.charCodeAt(0);
    const endIndex = end.charCodeAt(0);

    startIndex >= endIndex
        ? console.log(charactersInRange(endIndex, startIndex).join(' '))
        : console.log(charactersInRange(startIndex, endIndex).join(' '))
}

characters('a', 'd');
characters('#', ':');
characters('C', '#');