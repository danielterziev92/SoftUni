function solve(array){
    class Song{
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let loops = array.shift();
    let printType = array.pop();
    for(let i = 0; i < loops; i++){
        let [typeList, name, time] = array[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if(printType === 'all'){
        songs.forEach((i) => console.log(i.name));
    } else {
        let selectedSongs = songs.filter((i) => i.typeList === printType);
        selectedSongs.forEach((i) => console.log(i.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);