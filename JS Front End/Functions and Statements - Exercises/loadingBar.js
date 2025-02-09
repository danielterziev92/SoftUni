function loadingBar(numb) {
    const result = '.'.repeat(10).split('');

    if (numb < 100) {
        for (let i = 0; i < numb / 10; i++) {
            result[i] = '%';
        }

        console.log(`${numb}% [${result.join('')}]`);
    }

    numb !== 100
        ? console.log('Still loading...')
        : console.log('Complete')
}

loadingBar(30);
loadingBar(50);
loadingBar(100);