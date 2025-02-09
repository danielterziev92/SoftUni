function addItem() {
    const allItems = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');
    const newItem = document.createElement('li');
    newItem.textContent = newItemText.value;
    allItems.appendChild(newItem);
    newItemText.value = '';
}