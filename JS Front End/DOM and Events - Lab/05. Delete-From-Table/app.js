function deleteByEmail() {
    const table = document.querySelectorAll('#customers tbody tr');
    const emailInputValue = document.querySelector('input[name=email]').value;
    const output = document.getElementById('result');
    let result = 'Not found.'
    for (const row of table) {
        if (row.children[1].textContent === emailInputValue) {
            result = 'Deleted.'
            row.remove();
            break;
        }
    }

    output.textContent = result;
}