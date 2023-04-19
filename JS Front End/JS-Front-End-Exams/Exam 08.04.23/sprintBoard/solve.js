function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    document.getElementById('load-board-btn').addEventListener('click', loadData);
    document.getElementById('create-task-btn').addEventListener('click', createTask);

    const toDoSection = document.querySelector('#todo-section .task-list');
    const inProgressSection = document.querySelector('#in-progress-section .task-list');
    const codeReviewSection = document.querySelector('#code-review-section .task-list');
    const doneSection = document.querySelector('#done-section .task-list');


    async function loadData() {
        toDoSection.replaceChildren();
        inProgressSection.replaceChildren();
        codeReviewSection.replaceChildren();
        doneSection.replaceChildren();

        try {
            const response = await fetch(BASE_URL);

            if (!response.ok) {
                const result = response.json();
                throw new Error(result.message);
            }

            const data = await response.json();

            for (const taskId in data) {
                const {_id, description, status, title} = data[taskId]
                addTaskToTaskList(status, createTaskElement(_id, title, description, status));
            }
        } catch (e) {
            alert(e.message)
        }
    }

    async function createTask() {
        const newTitle = document.getElementById('title');
        const newDesc = document.getElementById('description');

        if (!newTitle || !newDesc) {
            return;
        }

        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title: newTitle.value, description: newDesc.value, status: 'ToDo'})
            });

            if (!response.ok) {
                const result = response.json();
                throw new Error(result.message);
            }

            newTitle.value = '';
            newDesc.value = '';

            loadData();

        } catch (e) {
            alert(e.message);
        }
    }

    function createTaskElement(id, title, desc, status) {
        const statusText = {
            'ToDo': 'Move to In Progress',
            'In Progress': 'Move to Code Review',
            'Code Review': 'Move to Done',
            'Done': 'Close',
        }

        const element = document.createElement('li');
        element.className = 'task';
        element.id = id;

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        element.appendChild(titleElement);

        const descElement = document.createElement('p');
        descElement.textContent = desc;
        element.appendChild(descElement);

        const buttonElement = document.createElement('button');
        buttonElement.textContent = statusText[status];
        buttonElement.addEventListener('click', moveToNextSection);
        element.appendChild(buttonElement);

        return element;
    }

    async function moveToNextSection(e) {
        const statuses = {
            'Move to In Progress': 'In Progress',
            'Move to Code Review': 'Code Review',
            'Move to Done': 'Done',
        }

        const currentStatus = e.currentTarget.textContent
        const parentElement = e.currentTarget.parentNode
        const id = parentElement.id;

        if (!statuses.hasOwnProperty(currentStatus)) {
            await fetch(BASE_URL + id, {method: 'DELETE'});
            loadData();
            return;
        }

        const [titleElement, descriptionElement] = parentElement.children;
        const title = titleElement.textContent;
        const description = descriptionElement.textContent;
        const status = statuses[currentStatus];

        const response = await fetch(BASE_URL + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, description, status})
        })

        const data = await response.json();

        loadData();

    }

    function addTaskToTaskList(status, element) {
        if (status === 'ToDo') {
            toDoSection.appendChild(element);
        } else if (status === 'In Progress') {
            inProgressSection.appendChild(element);
        } else if (status === 'Code Review') {
            codeReviewSection.appendChild(element);
        } else if (status === 'Done') {
            doneSection.appendChild(element);
        }
    }
}

attachEvents();