// function solve() {
//     const textAreaField = document.querySelector('#exercise textarea');
//     const outputResultField = document.getElementById('output');
//     outputResultField.textContent = '';
//     const texts = textAreaField.value.split('.').filter(x => x.length !== 0);
//     let paragraph = document.createElement('p');
//     const result = [];
//
//     for (let i = 1; i <= texts.length; i++) {
//         result.push(texts[i - 1]);
//
//         if (i % 3 === 0) {
//             paragraph.textContent = result.join('. ') + '.';
//             result.splice(0, result.length);
//             outputResultField.appendChild(paragraph);
//             paragraph = document.createElement('p');
//         }
//
//     }
//
//     if (result.length !== 0) {
//         paragraph.textContent = result.join('.') + '.';
//         outputResultField.appendChild(paragraph);
//     }
// }

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