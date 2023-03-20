function validate() {
    const emailValueElement = document.getElementById('email');
    emailValueElement.addEventListener('change', validateEmail);

    function validateEmail() {
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!this.value.match(pattern)) {
            this.classList.add('error')
        } else {
            this.classList.remove('error');
        }
    }
}