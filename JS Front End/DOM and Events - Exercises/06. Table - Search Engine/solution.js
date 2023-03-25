function solve() {
    const tableRows = document.querySelectorAll('.container tbody tr');
    const searchedWord = document.getElementById('searchField');
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        for (const row of tableRows) {
            if (row.innerHTML.includes(searchedWord.value)) {
                row.classList.add('select');
            } else {
                row.classList.remove('select');
            }
        }

        searchedWord.value = '';
    }
}