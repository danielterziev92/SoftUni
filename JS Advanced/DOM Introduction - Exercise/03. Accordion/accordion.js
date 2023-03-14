function toggle() {
    const extraField = document.getElementById('extra');
    const button = document.querySelector('.button');

    if (extraField.style.display === 'block') {
        extraField.style.display = 'none';
        button.textContent = 'More';
    } else {
        extraField.style.display = 'block';
        button.textContent = 'Less';
    }
}