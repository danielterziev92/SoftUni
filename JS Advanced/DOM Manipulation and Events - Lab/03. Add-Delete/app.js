function addItem() {

    function createLiElement(value, aElement) {
        const newLiElement = document.createElement('li');
        newLiElement.textContent = value;
        newLiElement.appendChild(aElement);
        return newLiElement;
    }

    function createATagElement() {
        const newButton = document.createElement('a');
        newButton.href = '#';
        newButton.textContent = '[Delete]';
        newButton.addEventListener('click', deleteElement);
        return newButton;
    }

    function deleteElement() {
        this.parentElement.remove();
    }

    const allItemsElement = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');
    const deleteButton = createATagElement();
    const newItemElement = createLiElement(newItemText.value, deleteButton);

    allItemsElement.appendChild(newItemElement);
    newItemText.value = '';
}