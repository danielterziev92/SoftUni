function sumTable() {
    const table = document.querySelectorAll('table td');
    let result = 0;
    for (let i = 0; i < table.length; i++) {
        if (i % 2 !== 0) {
            result += Number(table[i].textContent)
        }
    }
    const totalSum = document.getElementById('sum');
    totalSum.textContent = result;
}