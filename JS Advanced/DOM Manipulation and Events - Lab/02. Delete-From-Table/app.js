function deleteByEmail() {
    const emailWanted = document.querySelector('label input[name=email]');
    const resultText = document.getElementById('result');
    const tableValues = document.querySelectorAll('#customers tbody tr td:nth-child(2)')

    for (const row of tableValues) {
        if (row.textContent === emailWanted.value) {
            row.parentElement.remove();
            resultText.textContent = 'Deleted.';
        } else {
            resultText.textContent = 'Not found.';
        }
    }
}