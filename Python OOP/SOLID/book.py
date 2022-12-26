class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.page = 0

    def __str__(self):
        return f'{self.title} with author {self.author} have {self.page}'

    def turn_page(self, page):
        self.page = page


class Library:

    def __init__(self):
        self.books = list()

    def add_book(self, book):
        self.books.append(book)

    def remove_book(self, book):
        pass

    def find_book(self, book_title):
        for book in self.books:
            if book.title == book_title:
                return book
        return "Book is not found"


library = Library()

for numb in range(20):
    book = Book(f'Title {numb}', f'Author {numb}')
    library.add_book(book)

print(library.find_book('Title 28'))
print(library.find_book('Title 15'))
