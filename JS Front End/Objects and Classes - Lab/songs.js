function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        toString() {
            return this.name
        }
    }

    const songs = [];
    const [repeatTime, ...information] = [...arr];
    const typeList = information.pop()

    for (const info of information) {
        const [type, name, time] = [...info.split('_')];
        songs.push(new Song(type, name, time));
    }

    for (const song of songs) {
        if (song.typeList === typeList) {
            console.log(song.toString());
        } else if (typeList === 'all') {
            console.log(song.toString());
        }
    }
}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']);

// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);