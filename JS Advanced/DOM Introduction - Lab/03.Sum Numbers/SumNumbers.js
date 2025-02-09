function calc() {
    const value1 = document.getElementById('num1').value;
    const value2 = document.getElementById('num2').value;
    const result = document.getElementById('sum');
    result.value = Number(value1) + Number(value2);
}