function addItem() {
    const selectMenuElement = document.getElementById('menu');
    const newItemTextElement = document.getElementById('newItemText');
    const newItemValueElement = document.getElementById('newItemValue');

    const optionItem = document.createElement('option');
    optionItem.textContent = newItemTextElement.value;
    optionItem.value = newItemValueElement.value;
    selectMenuElement.appendChild(optionItem);
    newItemValueElement.value = '';
    newItemTextElement.value = ''
}