window.addEventListener("load", solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const ageElement = document.getElementById('age');
    const genreElement = document.getElementById('genre');
    const storyTitleElement = document.getElementById('story-title');
    const storyTextElement = document.getElementById('story');
    const previewElement = document.getElementById('preview-list');
    const publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', getAllValuesAndRenderThem);


    function getAllValuesAndRenderThem(e) {
        if (firstNameElement.value && lastNameElement.value && ageElement.value && storyTextElement.value && storyTitleElement.value) {
            const selectedGenre = genreElement.options[genreElement.selectedIndex].textContent;
            previewElement.appendChild(cretePreview(firstNameElement.value, lastNameElement.value, ageElement.value, selectedGenre, storyTitleElement.value, storyTextElement.value));
            publishBtn.disabled = true;
            document.querySelector('form').reset()
        }
    }

    function cretePreview(firstName, lastName, age, genre, storyTitle, storyText) {
        function createElement(type, text, attributes, children, callback) {
            const element = document.createElement(type);

            if (text) {
                element.textContent = text;
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

        return createElement('li', '', {className: 'story-info'}, [
            createElement('article', '', {}, [
                createElement('h4', `Name: ${firstName} ${lastName}`),
                createElement('p', `Age: ${age}`),
                createElement('p', `Title: ${storyTitle}`),
                createElement('p', `Genre: ${genre}`),
                createElement('p', storyText),

            ]),
            createElement('button', 'Save Story', {className: 'save-btn'}, [], saveStory),
            createElement('button', 'Edit Story', {className: 'edit-btn'}, [], editStory),
            createElement('button', 'Delete Story', {className: 'delete-btn'}, [], deleteStory),
        ])
    }

    function saveStory() {
        const element = document.createElement('h1');
        element.textContent = 'Your scary story is saved!';

        document.getElementById('main').replaceChildren(element);
    }

    function editStory(e) {
        const elements = e.currentTarget.parentNode.querySelector('article').children
        const [firstName, lastName] = elements[0].textContent.slice(6).split(' ');
        const age = elements[1].textContent.slice(5)
        const storyTitle = elements[2].textContent.slice(7)
        const genre = elements[3].textContent.slice(7);
        const storyText = elements[4].textContent;

        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        ageElement.value = age;
        genreElement.querySelector(`[value=${genre}]`).attributes.value.ownerElement.selected = true
        storyTitleElement.value = storyTitle;
        storyTextElement.value = storyText;

        deleteStory(e);
    }

    function deleteStory(e) {
        e.currentTarget.parentNode.remove();
        publishBtn.disabled = false;
    }
}