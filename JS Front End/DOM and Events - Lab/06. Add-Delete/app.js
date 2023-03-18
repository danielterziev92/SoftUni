function addItem() {
    const allItems = document.getElementById('items');
    const newItem = document.createElement('li');
    const removeButton = document.createElement('a');
    removeButton.href = '#';
    removeButton.textContent = '[Delete]';
    removeButton.addEventListener('click', deleteItem);
    const newItemText = document.getElementById('newItemText');
    newItem.textContent = newItemText.value;
    newItem.appendChild(removeButton);
    allItems.appendChild(newItem);
    newItemText.value = '';

    function deleteItem() {
        const parentElement = this.parentElement;
        parentElement.remove();
    }
}