function addItem() {
    const inputValue = document.getElementById('newItemText');
    const items = document.getElementById('items');
    const newItem = document.createElement('li');
    newItem.textContent = inputValue.value;
    items.appendChild(newItem);
    inputValue.value = '';
}