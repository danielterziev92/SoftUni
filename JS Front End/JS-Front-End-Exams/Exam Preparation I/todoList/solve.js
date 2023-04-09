function attachEvents() {
    document.querySelector('form').removeAttribute('method');

    const todoListElement = document.getElementById('todo-list');
    document.getElementById('load-button').addEventListener('click', loadTodos);
    document.getElementById('add-button').addEventListener('click', addTodo);
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    async function loadTodos(e) {
        e.preventDefault()
        todoListElement.replaceChildren()

        try {
            const response = await fetch(BASE_URL);

            if (!response.ok) {
                const error = response.json();
                throw new Error(error.message);
            }

            const data = await response.json();

            for (const id in data) {
                todoListElement.appendChild(
                    createElement('li', '', '', '', [
                        createElement('span', data[id].name, data[id]._id),
                        createElement('button', 'Remove', '', deleteTodo),
                        createElement('button', 'Edit', '', editTodo)
                    ])
                );


            }

        } catch (e) {
            alert(e.message)
        }
    }

    async function addTodo(e) {
        e.preventDefault()
        const name = document.getElementById('title').value;

        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name})
            });

            if (!response.ok) {
                const error = response.json();
                throw new Error(error.message);
            }


            const data = await response.json();
            document.querySelector('form').reset();

            loadTodos(e);

        } catch (e) {
            alert(e.message)
        }
    }

    async function deleteTodo(e) {
        const id = e.currentTarget.parentNode.querySelector('span').id;
        await fetch(BASE_URL + id, {method: 'DELETE'});
        loadTodos(e);
    }

    function editTodo(e) {
        const liElement = e.currentTarget.parentNode;
        const spanElement = liElement.querySelector('span');
        const text = spanElement.textContent;
        const id = spanElement.id;

        liElement.replaceChildren(
            createElement('input', text, id),
            createElement('button', 'Remove', '', deleteTodo),
            createElement('button', 'Submit', '', updateTodo),
        );

    }

    async function updateTodo(e) {
        const element = e.currentTarget.parentNode.querySelector('input');
        const id = element.id;
        const text = element.value;

        try {
            const response = await fetch(BASE_URL + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: text})
            })

            if (!response.ok){
                const error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();

            loadTodos(e);

        } catch (e) {
            alert(e.message);
        }
    }

    function createElement(type, text, id, callback, children) {
        const element = document.createElement(type);

        if (text) {
            if (type === 'input') {
                element.value = text;
            } else {
                element.textContent = text;
            }
        }

        if (id) {
            element.setAttribute('id', id);
        }

        if (callback) {
            element.addEventListener('click', callback);
        }

        if (children) {
            for (const child of children) {
                element.appendChild(child);
            }
        }

        return element;
    }
}

attachEvents();
