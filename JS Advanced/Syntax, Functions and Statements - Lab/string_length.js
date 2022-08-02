function sumLen(str1, str2, str3) {
    let sumLenStrs = str1.length + str2.length + str3.length;
    let aveLenStrs = Math.floor(sumLenStrs / 3)
    console.log(sumLenStrs)
    console.log(aveLenStrs)
}

sumLen('chocolate', 'ice cream', 'cake');
sumLen('pasta', '5', '22.3');