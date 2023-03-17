// function extractText() {
//     const items = document.getElementById('items');
//     const result = document.getElementById('result');
//     const allChildren = [];
//     for (let children of items.children) {
//         allChildren.push(children.textContent);
//     }
//     result.value = allChildren.join('\n');
// }

function extractText() {
    const items = document.getElementById('items').textContent.split('\n').map(x => x.trim());
    const result = document.getElementById('result');
    result.value = items.join('\n').trim()
    console.log(items)
}