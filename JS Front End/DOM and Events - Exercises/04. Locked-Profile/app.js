function lockedProfile() {
    Array.from(document.querySelectorAll('#main div.profile button'))
        .forEach(button => button.addEventListener('click', lockOrUnlockProfileInformation));

    function lockOrUnlockProfileInformation(e) {
        if (e.target.parentElement.querySelector('input[type=radio][value=unlock]').checked) {
            const info = e.target.parentElement.querySelector('div');

            if (e.target.textContent === 'Show more') {
                info.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                e.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}