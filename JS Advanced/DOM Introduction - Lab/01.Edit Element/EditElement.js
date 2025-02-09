function editElement(element, text, replacer) {
    const pattern = new RegExp(text, 'gm');
    element.textContent = element.textContent.replace(pattern, replacer);
}