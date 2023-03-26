// function colorize() {
//     const everyEvenRow = document.querySelectorAll('table tr:nth-child(even)');
//     everyEvenRow.forEach(row => row.style.backgroundColor = 'Teal');
// }

function colorize() {
    const everyEvenRow = document.querySelectorAll('table tr:nth-child(even)');
    for (const row of everyEvenRow){
        row.style.backgroundColor = 'Teal'
    }
}