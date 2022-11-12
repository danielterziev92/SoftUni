class Book:
    def __init__(self, content: str):
        self.content = content


class Formatter:
    @staticmethod
    def format(book: Book) -> str:
        return book.content


class Printer:
    @staticmethod
    def get_book(book: Book, formatter):
        return formatter.format(book)


book1 = Book('asdf')
normal_formatter = Formatter()
printer1 = Printer()
printer1.get_book(book1, normal_formatter)
print(printer1)
