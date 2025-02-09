function colorize() {
    const table = document.querySelectorAll('table tr');
    let index = 0;
    for (let tr of table) {
        if (index % 2 !== 0) {
            tr.style.backgroundColor = 'Teal';
        }
        index++;
    }
}