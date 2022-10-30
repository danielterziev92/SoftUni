from .album import Album


class Band:

    def __init__(self, name: str):
        self.name = name
        self.albums = list()

    def add_album(self, album: Album):
        if album in self.albums:
            return f'Band {self.name} already has {album.name} in their library.'

        self.albums.append(album)
        return f'Band {self.name} has added their newest album {album.name}.'

    def remove_album(self, album_name: str):
        for album in self.albums:
            if album.name == album_name:
                if album.published:
                    return f'Album has been published. It cannot be removed.'

                self.albums.remove(album)
                return f'Album {album.name} has been removed.'

        return f'Album {album_name} is not found.'

    def details(self):
        result = f'Band {self.name}\n'
        for album in self.albums:
            result += album.details() + '\n'

        return result.strip()
