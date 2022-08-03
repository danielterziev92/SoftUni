function getDays(month, year) {
    let days = new Date(year, month, 0).getDate();
    console.log(days)
}

getDays(1, 2012)
getDays(2, 2021)