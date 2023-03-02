function signCheck(numb1, numb2, numb3) {
    numb1 * numb2 * numb3 > 0
        ? console.log('Positive')
        : console.log('Negative')
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);