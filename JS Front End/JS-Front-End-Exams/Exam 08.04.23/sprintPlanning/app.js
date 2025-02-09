window.addEventListener('load', solve);

function solve() {
    const inputForm = document.getElementById('create-task-form');
    const titleField = document.getElementById('title')
    const descriptionField = document.getElementById('description');
    const labelField = document.getElementById('label');
    const pointsField = document.getElementById('points');
    const assigneeField = document.getElementById('assignee');
    const taskSections = document.getElementById('tasks-section');
    const deleteBtn = document.getElementById('delete-task-btn');
    const createBtn = document.getElementById('create-task-btn');
    const totalPointsField = document.getElementById('total-sprint-points');
    deleteBtn.disabled = true;

    createBtn.addEventListener('click', createTask);

    const labels = {
        'Feature': {label: '&#8865;', class: 'feature'},
        'Low Priority Bug': {label: '&#9737;', class: 'low-priority'},
        'High Priority Bug': {label: '&#9888;', class: 'high-priority'},
    }

    const tasks = {}

    function createTask(e) {
        if (!titleField.value || !descriptionField.value || !labelField.value || Number(pointsField.value) < 0 || !assigneeField.value) {
            return;
        }

        const id = `task-${Object.keys(tasks).length + 1}`;

        tasks[id] = {
            label: labelField.value,
            title: titleField.value,
            description: descriptionField.value,
            points: Number(pointsField.value),
            assignee: assigneeField.value,
        }

        const element = createElement('article', '', {id: id, className: 'task-card'}, '', [
            createElement('div', `${tasks[id].label} ${labels[tasks[id].label].label}`, {className: `task-card-label ${labels[tasks[id].label].class}`}),
            createElement('h3', tasks[id].title, {className: 'task-card-title'}),
            createElement('p', tasks[id].description, {className: 'task-card-description'}),
            createElement('div', `Estimated at ${tasks[id].points} pts`, {className: 'task-card-points'}),
            createElement('div', `Assigned to: ${tasks[id].assignee}`, {className: 'task-card-assignee'}),
            createElement('div', '', {className: 'task-card-actions'}, '', [
                createElement('button', 'Delete', '', editTask),
            ])
        ]);

        uploadTotalPoints();

        taskSections.appendChild(element);

        inputForm.reset();
    }

    function editTask(e) {
        const currentElement = e.currentTarget.parentNode.parentNode
        const id = currentElement['id']
        const idField = document.getElementById('task-id')
        idField.value = id;
        titleField.value = tasks[id].title;
        descriptionField.value = tasks[id].description;
        labelField.value = tasks[id].label;
        pointsField.value = tasks[id].points;
        assigneeField.value = tasks[id].assignee;
        [idField, titleField, descriptionField, labelField, pointsField, assigneeField].map(field => field.disabled = true);


        createBtn.disabled = true;
        deleteBtn.disabled = false;
        deleteBtn.addEventListener("click", () => {
            currentElement.remove();
            delete tasks[id];
            uploadTotalPoints();
            inputForm.reset();
            [idField, titleField, descriptionField, labelField, pointsField, assigneeField].map(field => field.disabled = false);
            createBtn.disabled = false;
            deleteBtn.disabled = true;
        });

    }

    function uploadTotalPoints() {
        const totalPoints = Object.keys(tasks).map(x => tasks[x].points).reduce((v1, v2) => v1 + v2, 0);
        totalPointsField.textContent = `Total Points ${totalPoints}pts`
    }


    function createElement(type, text, attributes, callback, children) {
        const element = document.createElement(type);

        if (text) {
            if (text.includes('&#')) {
                element.innerHTML = text
            } else {
                element.textContent = text
            }
        }

        if (attributes) {
            for (const prop in attributes) {
                element[prop] = attributes[prop];
            }
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