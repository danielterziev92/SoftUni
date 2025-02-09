function hoursTime(pages, readingPageForHour, days) {
    let result = (pages / readingPageForHour) / days
    console.log(result);
}

hoursTime(212, 20, 2);
hoursTime(432, 15, 4);