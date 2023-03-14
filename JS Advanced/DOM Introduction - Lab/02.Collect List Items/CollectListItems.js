function extractText() {
    const getElement = document.getElementById('items')
        .textContent.split('\n').map(e => e.trim());
    const printElement = document.getElementById('result')
    printElement.value = getElement.join('\n').trim();
}