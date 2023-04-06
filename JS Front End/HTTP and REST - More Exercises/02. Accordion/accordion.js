function solution() {
    const main = document.getElementById('main');
    const data_url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const detail_url = 'http://localhost:3030/jsonstore/advanced/articles/details/'

    async function loadData() {
        try {
            const allData = await getData(data_url);

            for (const item of allData) {
                const itemData = await getData(detail_url + item._id);
                main.appendChild(createAccordion(item._id, item.title, itemData.content))
            }

        } catch (e) {
            alert(e.message);
        }
    }

    async function getData(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw await response.json();
            }

            return response.json();

        } catch (e) {
            alert(e.message)
            throw e.message;
        }
    }

    function createAccordion(id, title, detailInfo) {
        return createElement('div', {className: 'accordion'}, '', [
            createElement('div', {className: 'head'}, '', [
                createElement('span', {}, title),
                createElement('button', {className: 'button', id: id}, 'More', [], showExtraText)
            ]),
            createElement('div', {className: 'extra'}, '', [
                createElement('p', {}, detailInfo)
            ])
        ]);
    }

    async function showExtraText(e) {
        const extraElement = e.currentTarget.parentElement.parentElement.querySelector('.extra');

        if (e.currentTarget.textContent === 'More') {
            extraElement.style.display = 'block';
            e.currentTarget.textContent = 'Less';
        } else {
            extraElement.style.display = 'none';
            e.currentTarget.textContent = 'More';
        }
    }

    function createElement(type, attributes, text, children, eventListener) {
        const element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        for (const key in attributes) {
            element[key] = attributes[key];
        }

        if (children) {
            for (const child of children) {
                element.appendChild(child)
            }
        }

        if (eventListener) {
            element.addEventListener('click', eventListener);
        }

        return element;
    }

    return loadData();
}

window.onload = solution();