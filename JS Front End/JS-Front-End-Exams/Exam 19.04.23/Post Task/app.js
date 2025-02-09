window.addEventListener("load", solve);

function solve() {
    const titleField = document.getElementById('task-title');
    const categoryField = document.getElementById('task-category');
    const contentField = document.getElementById('task-content');

    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');

    document.getElementById('publish-btn').addEventListener('click', createPost);


    function createPost() {
        if (!titleField.value || !categoryField.value || !contentField.value) {
            return;
        }

        const title = titleField.value;
        const category = categoryField.value;
        const content = contentField.value;

        reviewList.appendChild(createElement('li', '', {className: 'rpost'}, '', [
            createElement('article', '', '', '', [
                createElement('h4', title),
                createElement('p', `Category: ${category}`),
                createElement('p', `Content: ${content}`),
            ]),
            createElement('button', 'Edit', {className: 'action-btn edit'}, editTask),
            createElement('button', 'Post', {className: 'action-btn post'}, postTask),
        ]));

        titleField.value = '';
        categoryField.value = '';
        contentField.value = '';
        // [titleField, categoryField, contentField].map(field => field.value = '');
    }


    function editTask(e) {
        const currentElement = e.currentTarget.parentNode;
        currentElement.remove();

        const infoElement = Array.from(currentElement.children).shift();
        let [titleElement, categoryElement, contentElement] = Array.from(infoElement.children);

        const title = titleElement.textContent;
        const category = categoryElement.textContent.slice(10);
        const content = contentElement.textContent.slice(9);

        titleField.value = title;
        categoryField.value = category;
        contentField.value = content;
    }

    function postTask(e) {
        const currentElement = e.currentTarget.parentNode;
        currentElement.remove();

        currentElement.children[2].remove()
        currentElement.children[1].remove()

        publishedList.appendChild(currentElement);
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