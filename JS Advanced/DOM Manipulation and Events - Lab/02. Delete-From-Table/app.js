function deleteByEmail() {
    const emailWanted = document.querySelector('label input[name=email]');
    const resultText = document.getElementById('result');
    const tableValues = document.querySelectorAll('#customers tbody tr td:nth-child(2)')

    for (const rowValue of tableValues) {
        if (rowValue.textContent === emailWanted.value) {
            rowValue.parentElement.remove();
            resultText.textContent = 'Deleted.';
            return;
        }
    }

    resultText.textContent = 'Not found.';

}