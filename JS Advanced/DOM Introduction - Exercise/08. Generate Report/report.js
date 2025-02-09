function generateReport() {
    const output = document.getElementById('output');
    const tableHeader = document.querySelector("table thead tr");
    const tableBody = document.querySelector('tbody');
    const tableHeaderCols = tableHeader.children;
    const tableCheckedCols = {};
    const result = [];

    for (let i = 0; i < tableHeaderCols.length; i++) {
        const is_checked = tableHeaderCols[i].lastElementChild.checked
        if (is_checked) {
            const title = tableHeaderCols[i].textContent.toLowerCase()
            tableCheckedCols[title] = i;
        }
    }
    const tableBodyRows = tableBody.children

    if (tableCheckedCols) {
        for (let i = 0; i < tableBodyRows.length; i++) {
            const row = tableBodyRows[i];
            const currentObj = {};
            for (const col in tableCheckedCols) {
                currentObj[col] = tableBodyRows[i].children[tableCheckedCols[col]].textContent;
            }
            result.push(currentObj)
        }
    }

    output.textContent = JSON.stringify(result);
}