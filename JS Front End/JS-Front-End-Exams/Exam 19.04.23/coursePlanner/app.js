function coursePlanner() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const listWithAllCourses = document.getElementById('list');
    const titleField = document.getElementById('course-name');
    const typeField = document.getElementById('course-type');
    const descriptionField = document.getElementById('description');
    const teacherField = document.getElementById('teacher-name');

    const addCourseBtn = document.getElementById('add-course');
    const editCourseBtn = document.getElementById('edit-course');

    addCourseBtn.addEventListener('click', createCourse);
    editCourseBtn.addEventListener('click', updateCourseInfo);
    document.getElementById('load-course').addEventListener('click', loadAllCourses);

    let lastSelectedId;

    async function loadAllCourses() {

        try {
            const response = await fetch(BASE_URL);

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message);
            }

            const data = await response.json();

            const dataElements = [];

            for (const id in data) {
                const {_id, title, type, description, teacher} = data[id];
                dataElements.push(createElement('div', '', {className: 'container', id: _id}, '', [
                    createElement('h2', title),
                    createElement('h3', teacher),
                    createElement('h3', type),
                    createElement('h4', description),
                    createElement('button', 'Edit Course', {className: 'edit-btn'}, editCourse),
                    createElement('button', 'Finish Course', {className: 'finish-btn'}, finishCourse),
                ]));
            }

            listWithAllCourses.replaceChildren(...dataElements);
        } catch (e) {
            alert(e.message)
        }
    }

    async function createCourse(e) {
        e.preventDefault()
        const title = titleField.value;
        const type = typeField.value;
        const description = descriptionField.value;
        const teacher = teacherField.value;

        if (!titleField.value || !typeField.value || !descriptionField.value || !teacherField.value) {
            alert('All fields are required!');
            return;
        }

        if (!['Long', 'Medium', 'Short'].includes(type)) {
            alert(`Type must be one of: Long, Medium or Short`);
            return;
        }
        e.stopPropagation();

        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, type, description, teacher})
            });

            if (!response.ok) {
                const result = response.json();
                throw new Error(result.message);
            }

            loadAllCourses();

        } catch (e) {
            alert(e.message)
        }

        titleField.value = '';
        typeField.value = '';
        descriptionField.value = '';
        teacherField.value = '';
    }

    function editCourse(e) {
        addCourseBtn.disabled = true;
        editCourseBtn.disabled = false;

        const id = e.currentTarget.parentNode.id;
        const [titleElement, teacherElement, typeElement, descriptionElement] = Array.from(e.currentTarget.parentNode.children);

        titleField.value = titleElement.textContent;
        descriptionField.value = descriptionElement.textContent;
        typeField.value = typeElement.textContent;
        teacherField.value = teacherElement.textContent;

        lastSelectedId = id;
    }

    async function updateCourseInfo(e) {
        e.preventDefault()
        const id = lastSelectedId;

        const title = titleField.value;
        const type = typeField.value;
        const description = descriptionField.value;
        const teacher = teacherField.value;

        try {
            const response = await fetch(BASE_URL + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    title, type, description, teacher, _id: id
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            loadAllCourses();


        } catch (e) {
            alert(e.message);
        }

        titleField.value = '';
        typeField.value = '';
        descriptionField.value = '';
        teacherField.value = '';

        addCourseBtn.disabled = false;
        editCourseBtn.disabled = true;
    }

    async function finishCourse(e) {
        const id = e.currentTarget.parentNode.id;

        await fetch(BASE_URL + id, {method: 'DELETE'});

        loadAllCourses();
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

coursePlanner();