function extract(content) {
    const text = document.getElementById(content).textContent.trim();
    const result = [];
    let currentResult = '';
    let is_text = false;
    for (let ch of text) {
        if (ch === ')') {
            result.push(currentResult);
            currentResult = '';
            is_text = false;
        }

        if (is_text) {
            currentResult += ch;
        }

        if (ch === '(') {
            is_text = true;
        }
    }

    return result.join(';');
}