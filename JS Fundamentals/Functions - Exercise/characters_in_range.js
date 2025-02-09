function characters(char1, char2) {
    let firstIndex = char1.charCodeAt(0);
    let endIndex = char2.charCodeAt(0);
    if (firstIndex > endIndex) {
        [endIndex, firstIndex] = [firstIndex, endIndex]
    }
    let result = [];
    for (let i = firstIndex + 1; i < endIndex; i++) {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '));
}

characters('a', 'd');
characters('#', ':');
characters('C', '#');