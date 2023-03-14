function solve() {
    function looping(word) {
        let currentResult = '';
        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                currentResult += word[i].toUpperCase();
            } else {
                currentResult += word[i].toLowerCase();
            }
        }
        return currentResult;
    }

    const text = document.getElementById('text').value;
    const theCase = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    if (theCase === 'Camel Case') {
        let currentResult = [];
        for (let word of text.split(' ')) {
            if (currentResult.length === 0) {
                currentResult.push(word.toLowerCase());
            } else {
                currentResult.push(looping(word));
            }
        }
        result.textContent = currentResult.join('');
    } else if (theCase === 'Pascal Case') {
        let currentResult = [];
        for (let word of text.split(' ')) {
            currentResult.push(looping(word));
        }
        result.textContent = currentResult.join('');
    } else {
        result.textContent = 'Error!';
    }

}