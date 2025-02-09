function solve() {
    const textAreaField = document.querySelector('#exercise textarea');
    const outputResultField = document.getElementById('output');
    outputResultField.textContent = '';
    const texts = textAreaField.value.split('.').filter(x => x.length !== 0);

    while (texts.length > 0) {
        const result = texts.splice(0, 3).join('. ') + '.';
        const paragraph = document.createElement('p');
        paragraph.textContent = result;
        outputResultField.appendChild(paragraph);
    }
}