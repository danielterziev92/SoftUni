const userData = JSON.parse(localStorage.getItem('userData'));

const welcomeTag = document.querySelector('nav .email span');
const loginAndRegisterButtons = document.querySelector('nav #guest');
const logoutButton = document.querySelector('nav #user');
const addForm = document.getElementById('addForm');
const loadDataButton = document.querySelector('aside .load');

const baseUrl = 'http://localhost:3030/data/catches/'

loadDataButton.addEventListener('click', loadData);

if (userData) {
    logoutButton.style.display = 'inline-block';
    loginAndRegisterButtons.style.display = 'none';
    welcomeTag.textContent = userData.email;
    addForm.querySelector('.add').disabled = false;
} else {
    loginAndRegisterButtons.style.display = 'inline-block';
    welcomeTag.textContent = 'guess';
    logoutButton.style.display = 'none';
    addForm.querySelector('.add').disabled = true;
}

async function loadData() {

    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();


        const catchesForm = document.querySelector('fieldset#main #catches');

        catchesForm.replaceChildren(...[...data].map(
            item => createCatch(
                item._id,
                item.angler,
                item.weight,
                item.species,
                item.location,
                item.bait,
                item.captureTime,
                item._ownerId
            )));

    } catch (error) {
        alert(error.message)
    }
}

function createCatch(id, angler, weight, species, location, bait, captureTime, ownerId) {
    function createElement(type, text, attributes, children, callback) {
        const element = document.createElement(type);

        if (type === 'input') {
            element.value = text;
        } else {
            element.textContent = text;
        }

        if (attributes) {
            for (const prop in attributes) {
                // if (prop === 'dataset') {
                //     for (const set in prop) {
                //         element[prop][set] = prop[set];
                //     }
                // }
                element[prop] = attributes[prop];
            }

        }

        if (children) {
            [...children].map(child => element.appendChild(child));
        }

        if (callback) {
            element.addEventListener('click', callback);
        }

        return element;
    }

    const isDisabled = Boolean(userData._id === ownerId)

    return createElement('div', '', {className: 'catch'}, [
        createElement('label', 'Angler'),
        createElement('input', angler, {className: 'angler', type: 'text'}),
        createElement('label', 'Weight'),
        createElement('input', weight, {className: 'weight', type: 'text'}),
        createElement('label', 'Species'),
        createElement('input', species, {className: 'species', type: 'text'}),
        createElement('label', 'Location'),
        createElement('input', location, {className: 'location', type: 'text'}),
        createElement('label', 'Bait'),
        createElement('input', bait, {className: 'bait', type: 'text'}),
        createElement('label', 'Capture Time'),
        createElement('input', captureTime, {className: 'captureTime', type: 'number'}),
        // createElement('button', 'Update', {className: 'update', dataset: {id: id}}, [], updateItem),
        // createElement('button', 'Delete', {className: 'delete', dataset: {id: id}}, [], deleteItem),
    ]);
}

function updateItem(e) {
    console.log(e)
}

function deleteItem(e) {
    console.log(e)
}
