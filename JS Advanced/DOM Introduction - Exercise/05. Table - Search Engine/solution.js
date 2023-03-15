function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const tableCells = document.querySelectorAll('.container tbody tr');
    const searchTextField = document.getElementById('searchField');

    function onClick() {
        for (const rowCells of tableCells) {
            if (rowCells.innerHTML.includes(searchTextField.value)) {
                rowCells.classList.add('select');
            } else {
                rowCells.classList.remove('select');
            }
        }

        searchTextField.value = '';
    }
}