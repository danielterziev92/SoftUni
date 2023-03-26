function sumTable() {
    const allTableRows = document.querySelectorAll('table tr td:nth-child(2)');
    const totalSum = document.getElementById('sum');
    let result = 0;

    for (const row of allTableRows) {
        result += Number(row.textContent)
    }

    totalSum.textContent = result;
}