from math import ceil


class PhotoAlbum:

    def __init__(self, pages: int):
        self.pages = pages
        self.photos = [[] for _ in range(pages)]

    @classmethod
    def from_photos_count(cls, photo_count: int):
        return cls(ceil(photo_count / 4))

    def add_photo(self, label: str):
        for page_inx in range(len(self.photos)):
            if len(self.photos[page_inx]) < 4:
                self.photos[page_inx].append(label)
                photo_inx = self.photos[page_inx].index(label)
                return f'{label} photo added successfully on page {page_inx + 1} slot {photo_inx + 1}'
        return 'No more free slots'

    def display(self):
        result = '-' * 11 + '\n'
        for pages in self.photos:
            result += ''.join(['[] ' for _ in pages]).strip() + '\n'
            result += '-' * 11 + '\n'

        return result


album = PhotoAlbum(2)

print(album.add_photo("baby"))
print(album.add_photo("first grade"))
print(album.add_photo("eight grade"))
print(album.add_photo("party with friends"))
print(album.photos)
print(album.add_photo("prom"))
print(album.add_photo("wedding"))

print(album.display())
