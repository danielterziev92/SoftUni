function loadingBar(numb) {
    if (numb === 100) {
        console.log(`${numb}% Complete!`);
        console.log('[%%%%%%%%%%]');
    } else {
        let bar = [];
        for (let i = 0; i < 10; i++) {
            if (i < numb / 10) {
                bar.push('%');
            } else {
                bar.push('.');
            }
        }
        console.log(`${numb}% [${bar.join('')}]`)
        console.log('Still loading...')
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);