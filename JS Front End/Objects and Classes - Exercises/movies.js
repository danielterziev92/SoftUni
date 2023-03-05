function moviesFromInput(commands) {
    const movies = {};
    const actions = {
        'addMovie': (name) => movies[name] = {'name': name},
        'directedBy': (name, director) => movies.hasOwnProperty(name) ? movies[name]['director'] = director : '',
        'onDate': (name, date) => movies.hasOwnProperty(name) ? movies[name]['date'] = date : '',
    }

    for (let command of commands) {
        if (command.includes('addMovie')) {
            const name = command.split('addMovie ')[1];
            actions.addMovie(name);
        } else if (command.includes('directedBy')) {
            const [name, director] = command.split(' directedBy ');
            actions.directedBy(name, director);
        } else if (command.includes('onDate')) {
            const [name, date] = command.split(' onDate ');
            actions.onDate(name, date);
        }
    }

    for (let movie in movies) {
        if (movies[movie].hasOwnProperty('name') && movies[movie].hasOwnProperty('director') && movies[movie].hasOwnProperty('date')) {
            console.log(JSON.stringify(movies[movie]));
        }
    }
}

moviesFromInput([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

moviesFromInput([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);