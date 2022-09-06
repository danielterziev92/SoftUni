function movies(array) {
    let listOfMovies = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith('addMovie')) {
            listOfMovies.push({name: array[i].replace('addMovie ', '')});
        } else if (array[i].includes('directedBy')) {
            let movieName = array[i].split(' directedBy ')[0];
            let director = array[i].split(' directedBy ')[1];
            for (let i = 0; i < listOfMovies.length; i++) {
                if (movieName === listOfMovies[i].name) {
                    listOfMovies[i].director = director;
                    break;
                }
            }
        } else if (array[i].includes('onDate')) {
            let movieName = array[i].split(' onDate ')[0];
            let date = array[i].split(' onDate ')[1];
            for (let i = 0; i < listOfMovies.length; i++) {
                if (movieName === listOfMovies[i].name) {
                    listOfMovies[i].date = date;
                    break;
                }
            }
        }
    }
    listOfMovies.forEach(movie => movie.director && movie.date ? console.log(JSON.stringify(movie)) : null);
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);