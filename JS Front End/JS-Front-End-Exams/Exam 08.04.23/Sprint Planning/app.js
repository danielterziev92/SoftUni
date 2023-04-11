window.addEventListener('load', solve);

function solve() {
    const totalPointsOpts = document.getElementById('total-sprint-points');
    const allTasks = document.getElementById('tasks-section');
    document.getElementById('create-task-btn').addEventListener('click', createTask);
    const deleteButton = document.getElementById('delete-task-btn');

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const label = document.getElementById('label');
    const points = document.getElementById('points');
    const assignee = document.getElementById('assignee');

    const labels = {
        'Feature': {text: 'Feature: &#8865;', class: 'feature'},
        'Low Priority Bug': {text: 'Low Priority Bug: &#9737;', class: 'low-priority'},
        'High Priority Bug': {text: 'High Priority Bug: &#9888;', class: 'high-priority'}
    }

    function createTask(e) {
        e.preventDefault()


        const currentLabel = label.options[label.selectedIndex].textContent.trim()


        const index = allTasks.querySelectorAll('article').length + 1;
        allTasks.appendChild(
            createElement('article', '', {id: `task-${index}`, className: 'task-card'}, [
                createElement('div', labels[currentLabel].text, {className: `task-card-label ${labels[currentLabel].class}`}),
                createElement('h3', title.value, {className: 'task-card-title'}),
                createElement('p', description.value, {className: 'task-card-description'}),
                createElement('div', `Estimated at ${points.value} pts`, {className: 'task-card-points'}),
                createElement('div', `Assigned to: ${assignee.value}`, {className: 'task-card-assignee'}),
                createElement('div', '', {className: 'task-card-actions'}, [
                    createElement('button', 'Delete', {}, [], deleteTask)
                ])
            ])
        )

        document.getElementById('create-task-form').reset();
    }

    function deleteTask(e) {
        const element = e.currentTarget.parentNode.parentNode;
        const taskId = document.getElementById('task-id');
        taskId.value = element.id.slice(5)

        const currentTitle = element.querySelector('.task-card-title').textContent;
        const currentDescription = element.querySelector('.task-card-description').textContent;
        const currentLabel = element.querySelector('.task-card-label').textContent.split(':')[0].trim();
        const currentPoints = element.querySelector('.task-card-points').textContent;
        const currentAssignee = element.querySelector('.task-card-assignee').textContent;

        title.value = currentTitle;
        description.value = currentDescription;
        const allOptions = Object.keys(labels).map(label =>
            createElement('option', label, {value: label, selected: label === currentLabel}));
        label.replaceChildren(...allOptions);
        points.value = currentPoints.match(/\d/g);
        assignee.value = currentAssignee.split(':')[1];
        // querySelector(`[value=${genre}]`).attributes.value.ownerElement.selected = true

    }

    function createElement(type, text, attributes, children, callback) {
        const element = document.createElement(type);

        if (text) {
            if (text.includes('&#')) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
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