function rotateTimes(band, album, song) {
    let resultInSecond = ((album.length * band.length) * song.length) / 2
    let result = Math.ceil(resultInSecond / 2.5)
    console.log(`The plate was rotated ${result} times.`);
}

rotateTimes('Black Sabbath', 'Paranoid', 'War Pigs');
rotateTimes('Rammstein', 'Sehnsucht', 'Engel');
