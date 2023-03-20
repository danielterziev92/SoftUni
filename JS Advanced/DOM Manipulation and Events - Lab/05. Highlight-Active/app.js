function focused() {
    const allInputElements = document.querySelectorAll('div div input[type=text]');
    for (const input of allInputElements) {
        input.addEventListener('focus', addBackgroundColor);
        input.addEventListener('blur', removeBackgroundColor);
    }

    function addBackgroundColor() {
        this.parentElement.classList.add('focused')
    }

    function removeBackgroundColor() {
        this.parentElement.classList.remove('focused');
    }
}