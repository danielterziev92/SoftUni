function create(words) {
    const contentDiv = document.getElementById('content');
    for (const word of words) {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');
        pElement.style.display = 'none';
        pElement.textContent = word;
        divElement.addEventListener('click', showIt)
        divElement.appendChild(pElement);
        contentDiv.appendChild(divElement);
    }

    function showIt() {
        this.children[0].style.display = 'block';
    }
}