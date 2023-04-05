function lockedProfile() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let index = 1;
    loadProfiles();

    async function loadProfiles() {
        main.replaceChildren();

        try {
            const response = await fetch(url)

            if (response.ok === false) {
                throw await response.json();
            }

            const data = await response.json()

            Object.values(data).forEach(obj => {
                main.appendChild(createProfile(obj.username, obj.email, obj.age));
                index++;
            });


        } catch (e) {
            alert(e.message)
        }
    }


    function createProfile(username, email, age) {
        const profile = createElement('div', {className: 'profile'}, '', [
            createElement('img', {src: './iconProfile2.png', className: 'userIcon'}),
            createElement('label', {}, 'Lock'),
            createElement('input', {type: 'radio', name: `user${index}Locked`, checked: true}, 'lock'),
            createElement('label', {}, 'Unlock'),
            createElement('input', {type: 'radio', name: `user${index}Locked`}, 'unlock'),
            createElement('hr'),
            createElement('label', {}, 'Username'),
            createElement('input', {type: 'text', name: `user${index}Username`, disabled: true, readOnly: true}, username),
            createElement('div', {id: `user${index}HiddenFields`, className: 'hiddenInfo'}, '', [
                createElement('hr'),
                createElement('label', {}, 'Email:'),
                createElement('input', {type: 'email', name: `user${index}Email`, disabled: true, readOnly: true}, email),
                createElement('label', {}, 'Age'),
                createElement('input', {type: 'email', name: `user${index}Age`, disabled: true, readOnly: true}, age),
            ]),
            createElement('button', {}, 'Show more', [], showInformation)
        ])


        return profile;
    }

    function showInformation(event) {
        const is_locked = event.currentTarget.parentNode.querySelector("input[value=unlock]").checked
        const hiddenInfo = event.currentTarget.parentNode.querySelector('.hiddenInfo')

        if (is_locked) {
            if (event.currentTarget.textContent === 'Show more') {
                [...hiddenInfo.children].map(item => item.style.display = 'block');
                event.currentTarget.textContent = 'Hide it';
            } else {
                event.currentTarget.textContent = 'Show more';
                [...hiddenInfo.children].map(item => item.style.display = 'none');
            }
        }
    }

    function createElement(type, attributes, textContent, children, callback) {
        const element = document.createElement(type);

        for (const attr in attributes) {
            element[attr] = attributes[attr];
        }

        if (textContent) {
            if (type === 'input') {
                element.value = textContent;
            } else {
                element.textContent = textContent;
            }
        }

        if (children) {
            for (const child of children) {
                element.appendChild(child)
            }
        }

        if (callback) {
            element.addEventListener('click', callback);
        }

        return element;
    }
}

