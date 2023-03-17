function solve() {
    const convertIt = document.querySelector('#container button')
    convertIt.addEventListener('click', convert);
    const optionValues = document.getElementById('selectMenuTo');
    optionValues.removeChild(optionValues.children[0]);
    const output = document.getElementById('result');
    const optionsElementValues = ['Binary', 'Hexadecimal'];
    for (let i = 0; i < 2; i++) {
        const option = document.createElement('option');
        option.value = optionsElementValues.shift().toLowerCase();
        option.textContent = option.value;
        if (i === 0) {
            option.setAttribute('selected', true);
        }
        optionValues.appendChild(option);
    }

    function convert(name) {
        const number = document.querySelector('input[type=number]').value;
        const currentOperation = optionValues.options[optionValues.selectedIndex].text.toLowerCase();
        let result = 0;
        if (currentOperation === 'binary') {
            result = convertToBinary(number);
        } else {
            result = convertToHexadecimal(number);
        }

        output.value = result;
    }

    function convertToBinary(x) {
        let bin = 0;
        let rem, i = 1, step = 1;
        while (x != 0) {
            rem = x % 2;
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        return bin;
    }

    function convertToHexadecimal(x) {
        return Number(x).toString(16).toUpperCase();
    }
}