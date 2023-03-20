function attachGradientEvents() {
    const gradientBoxElement = document.getElementById('gradient');
    const result = document.getElementById('result');

    function getPercentage(e) {
        result.textContent = Math.floor(e.offsetX / gradientBoxElement.clientWidth * 100) + '%';
    }

    gradientBoxElement.addEventListener('mousemove', getPercentage)
}