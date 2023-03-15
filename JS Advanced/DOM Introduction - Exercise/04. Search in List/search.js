// function search() {
//     const towns = document.getElementById('towns').children;
//     const searchWord = document.getElementById('searchText').value;
//     const result = document.getElementById('result');
//     let matches = 0;
//     for (let town of towns) {
//         const text = town.textContent;
//         if (text.startsWith(searchWord)) {
//             town.style.textDecoration = 'underline';
//             town.style.fontWeight = 'bold';
//             matches++;
//         } else {
//             town.style.textDecoration = 'none';
//             town.style.fontWeight = 'normal';
//         }
//     }
//     result.textContent = `${matches} matches found`
// }

function search() {
    const towns = document.querySelectorAll('ul#towns li')
    const searchWord = document.getElementById('searchText').value;
    const result = document.getElementById('result');
    let matches = 0;

    for (let town of towns) {
        const text = town.textContent;
        if (text.match(searchWord)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            matches++;
        } else {
            town.style.textDecoration = '';
            town.style.fontWeight = 'normal';
        }
    }
    result.textContent = `${matches} matches found`
}