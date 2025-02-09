function focused() {
    const inputs = document.querySelectorAll('input[type=text]');
    for (const input of inputs) {
        input.addEventListener('focus', setBackground);
        input.addEventListener('blur', removeBackground);
    }

    function setBackground() {
        this.parentElement.classList.add('focused');
    }

    function removeBackground() {
        this.parentElement.classList.remove('focused');
    }
}