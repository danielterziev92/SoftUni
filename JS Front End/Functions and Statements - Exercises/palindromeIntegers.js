function palindromeIntegers(numbs) {
    console.log(numbs.map((numb => numb.toString() === numb.toString().split('').reverse().join(''))).join('\n'))
}

palindromeIntegers([123, 323, 421, 121]);