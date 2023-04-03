function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const allMessagesElement = document.getElementById('messages');


    document.getElementById('refresh').addEventListener('click', loadAllContents);
    document.getElementById('submit').addEventListener('click', sendData);

    function sendData(e) {
        const [author, content] = e.currentTarget.parentNode.querySelectorAll('input[type=text]');
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({author: author.value, content: content.value}),
        }).then(res => res.json())
            .then(data =>
                allMessagesElement.value += `\n${data.author}: ${data.content}\n`)
            .catch(e => console.log(e));
    }

    async function loadAllContents() {
        const data = await (await fetch(BASE_URL)).json();
        allMessagesElement.value = Object.values(data).map(value => `${value.author}: ${value.content}`).join('\n');
    }
}

attachEvents();