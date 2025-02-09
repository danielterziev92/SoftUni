function toggle() {
    const valueText = document.querySelector('#accordion div span');
    const extraText = document.getElementById('extra');
    console.log(valueText)

    if (valueText.textContent.toUpperCase() === 'MORE') {
        extraText.style.display = 'block'
        valueText.textContent = 'Less';
    } else {
        extraText.style.display = 'none';
        valueText.textContent = 'More';
    }
}