function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadAllPhones);
    document.getElementById('btnCreate').addEventListener('click', postPhoneData);
    const allPhonesElement = document.getElementById('phonebook');
    const POST_AND_GET_BASE_URL = 'http://localhost:3030/jsonstore/phonebook'
    const DELETE_BASE_URL = 'http://localhost:3030/jsonstore/phonebook/'

    async function loadAllPhones() {
        const data = await (await fetch(POST_AND_GET_BASE_URL)).json();
        allPhonesElement.replaceChildren('');

        for (const phoneId in data) {
            const {person, phone} = data[phoneId];
            allPhonesElement.appendChild(createLiElement((`${person}: ${phone}`), phoneId));
        }
    }


    function createLiElement(text, id) {
        const liElement = document.createElement('li');
        liElement.textContent = text;
        liElement.appendChild(createButtonForLiElement(id))

        return liElement;

        function createButtonForLiElement(id) {
            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Delete';
            buttonElement.id = id;
            buttonElement.addEventListener('click', deleteElement)

            return buttonElement;
        }
    }


    async function postPhoneData() {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        fetch(POST_AND_GET_BASE_URL, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({person, phone}),
        })
            .then(res => res.json())
            .then((data) => {
                const {person, phone, _id} = data;
                allPhonesElement.appendChild(createLiElement(`${person}: ${phone}`, _id));
            }).catch(e => console.log(e))
    }

    async function deleteElement(e) {
        const id = this.id;

        fetch(`${DELETE_BASE_URL}${id}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(allPhonesElement.removeChild(this.parentNode))
            .catch(e => console.log(e));
    }

}

attachEvents();