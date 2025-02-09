function solve() {
    const [values, outputElement] = Array.from(document.querySelectorAll('#exercise textarea'));
    const allItems = document.querySelector('tbody');
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('#exercise button'));
    generateBtn.addEventListener('click', createAllItems);
    buyBtn.addEventListener('click', collectAllItems);

    const elements = {
        'img': function (url) {
            const tdElement = document.createElement('td');
            const imgElement = document.createElement('img');
            imgElement.src = url;
            tdElement.appendChild(imgElement);
            return tdElement;
        },
        'p': function (value) {
            const tdElement = document.createElement('td');
            const pElement = document.createElement('p');
            pElement.textContent = value;
            tdElement.appendChild(pElement);
            return tdElement;
        },
        'input': function (type) {
            const tdElement = document.createElement('td');
            const inputElement = document.createElement('input');
            inputElement.type = type;
            tdElement.appendChild(inputElement);
            return tdElement;
        }
    }

    function appendElements(elements, parentElement) {
        for (const element of elements) {
            parentElement.appendChild(element)
        }
    }

    function createAllItems() {
        for (const {name, img, price, decFactor} of JSON.parse(values.value)) {
            const trElement = document.createElement('tr');
            const imgElement = elements['img'](img);
            const nameElement = elements['p'](name);
            const priceElement = elements['p'](price);
            const decFactorElement = elements['p'](decFactor);
            const inputElement = elements['input']('checkbox');
            appendElements([imgElement, nameElement, priceElement, decFactorElement, inputElement], trElement);
            allItems.appendChild(trElement);
        }
    }

    function collectAllItems() {
        const allCheckedItems = Array.from(document.querySelectorAll('tbody tr input:checked'));
        const allItemsNames = [];
        let totalPrice = 0;
        let decorationFactor = 0;

        for (const item of allCheckedItems) {
            const tableRow = item.parentElement.parentElement;
            const [name, price, decFactor] = Array.from(tableRow.querySelectorAll('p'));
            allItemsNames.push(name.textContent);
            totalPrice += Number(price.textContent);
            decorationFactor += Number(decFactor.textContent);
        }

        const avrFactor = decorationFactor / allCheckedItems.length;

        let result = '';
        result += `Bought furniture: ${allItemsNames.join(', ')}\n`
        result += `Total price: ${totalPrice.toFixed(2)}\n`
        result += `Average decoration factor: ${avrFactor}`
        outputElement.value = result;
    }
}