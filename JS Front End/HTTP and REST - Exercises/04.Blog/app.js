function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadAllPostsInSelectField);
    document.getElementById('btnViewPost').addEventListener('click', showPostDetails);

    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');

    let allPosts;

    async function loadAllPostsInSelectField() {
        const selectElement = document.getElementById('posts');

        allPosts = await (await fetch('http://localhost:3030/jsonstore/blog/posts')).json();

        for (const id in allPosts) {
            selectElement.appendChild(createOptionElement(id, allPosts[id].title));
        }

        function createOptionElement(value, textContent) {
            const optionElement = document.createElement('option');
            optionElement.value = value;
            optionElement.textContent = textContent;

            return optionElement;
        }
    }

    async function showPostDetails() {
        const selectedOptionId = document.getElementById('posts').selectedOptions[0].value

        const comments = await (await fetch('http://localhost:3030/jsonstore/blog/comments')).json();
        const commentsForPostDetail = Object.keys(comments).filter(key => comments[key].postId === selectedOptionId);


        postTitleElement.textContent = allPosts[selectedOptionId].title;
        postBodyElement.textContent = allPosts[selectedOptionId].body;

        postCommentsElement.replaceChildren(...commentsForPostDetail.map(commentKey => createLiElement(comments[commentKey].id, comments[commentKey].text)))

        // for (const commentKey of commentsForPostDetail) {
        //     postCommentsElement.appendChild(createLiElement(comments[commentKey].id, comments[commentKey].text));
        // }

        function createLiElement(id, text) {
            const liElement = document.createElement('li');
            liElement.id = id;
            liElement.textContent = text;

            return liElement;
        }
    }

}

attachEvents();