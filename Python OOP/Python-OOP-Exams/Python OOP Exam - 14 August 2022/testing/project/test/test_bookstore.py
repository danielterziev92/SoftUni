from project.bookstore import Bookstore
from unittest import TestCase, main


class BookStoreTest(TestCase):
    books_limit = 10

    def setUp(self):
        self.book_store = Bookstore(self.books_limit)

    def test_attributes_on_initialization_correctly(self):
        book_limit = self.books_limit
        self.assertEqual(book_limit, self.book_store.books_limit)
        self.assertEqual({}, self.book_store.availability_in_store_by_book_titles)
        self.assertEqual(0, self.book_store._Bookstore__total_sold_books)

    def test_attribute_books_limit_with_zero_value_raises(self):
        book_limit = 0
        with self.assertRaises(ValueError) as ex:
            book_store = Bookstore(book_limit)

        result = ex.exception.__str__()
        expected_result = f'Books limit of {book_limit} is not valid'
        self.assertEqual(expected_result, result)

    def test_attribute_books_limit_with_negative_value_raises(self):
        book_limit = -1
        with self.assertRaises(ValueError) as ex:
            book_store = Bookstore(book_limit)

        result = ex.exception.__str__()
        expected_result = f'Books limit of {book_limit} is not valid'
        self.assertEqual(expected_result, result)

    def test_count_the_total_number_of_books_in_the_bookstore_with_no_books(self):
        books_count = 0
        self.assertEqual(books_count, len(self.book_store))

    def test_count_the_total_number_of_books_in_the_bookstore_with_two_books(self):
        self.book_store.receive_book('Harry Potter', 1)
        self.assertEqual(1, len(self.book_store))
        self.book_store.receive_book('Harry Potter', 2)
        self.assertEqual(3, len(self.book_store))

    def test_receive_one_book_with_less_count_pages_then_the_book_store_limit(self):
        result = self.book_store.receive_book('Harry Potter', 9)
        expected_result = '9 copies of Harry Potter are available in the bookstore.'
        self.assertEqual(expected_result, result)

    def test_receive_move_book_with_less_count_pages_then_the_book_store_limit(self):
        result = self.book_store.receive_book('Harry Potter', 5)
        expected_result = '5 copies of Harry Potter are available in the bookstore.'
        self.assertEqual(expected_result, result)
        result = self.book_store.receive_book('Harry Potter and GOF', 5)
        expected_result = '5 copies of Harry Potter and GOF are available in the bookstore.'
        self.assertEqual(expected_result, result)
        availability_in_store_by_book_titles = {
            'Harry Potter': 5,
            'Harry Potter and GOF': 5
        }
        self.assertEqual(availability_in_store_by_book_titles, self.book_store.availability_in_store_by_book_titles)
        self.assertEqual(10, len(self.book_store))

    def test_receive_one_book_with_more_count_pages_then_the_book_store_limit(self):
        with self.assertRaises(Exception) as ex:
            Bookstore(1).receive_book('Harry Potter', 2)
        result = ex.exception.__str__()
        expected_result = 'Books limit is reached. Cannot receive more books!'
        self.assertEqual(result, expected_result)

    def test_receive_more_book_with_more_count_pages_then_the_book_store_limit(self):
        result = self.book_store.receive_book('Harry Potter', 9)
        expected_result = '9 copies of Harry Potter are available in the bookstore.'
        self.assertEqual(expected_result, result)
        with self.assertRaises(Exception) as ex:
            self.book_store.receive_book('Harry Potter and GOF', 10)

        result = ex.exception.__str__()
        expected_result = 'Books limit is reached. Cannot receive more books!'
        self.assertEqual(result, expected_result)

    def test_sell_book_with_book_title_does_not_exist_raises(self):
        with self.assertRaises(Exception) as ex:
            Bookstore(1).sell_book('Harry Potter', 10)

        result = ex.exception.__str__()
        expected_result = "Book Harry Potter doesn't exist!"
        self.assertEqual(expected_result, result)

    def test_sell_book_with_existing_book_title_and_more_number_of_book_pages_raises(self):
        with self.assertRaises(Exception) as ex:
            self.book_store.receive_book('Harry Potter', 10)
            self.book_store.sell_book('Harry Potter', 20)

        result = ex.exception.__str__()
        expected_result = "Harry Potter has not enough copies to sell. Left: 10"
        self.assertEqual(expected_result, result)

    def test_sell_book_with_existing_book_title_and_absolute_book_pages(self):
        self.book_store.receive_book('Harry Potter', 10)
        self.assertEqual({'Harry Potter': 10}, self.book_store.availability_in_store_by_book_titles)
        result = self.book_store.sell_book('Harry Potter', 10)
        expected_result = 'Sold 10 copies of Harry Potter'
        self.assertEqual(expected_result, result)
        self.assertEqual({'Harry Potter': 0}, self.book_store.availability_in_store_by_book_titles)

    def test_sell_book_with_existing_book_title_and_less_book_pages(self):
        self.book_store.receive_book('Harry Potter', 10)
        self.assertEqual({'Harry Potter': 10}, self.book_store.availability_in_store_by_book_titles)
        result = self.book_store.sell_book('Harry Potter', 5)
        expected_result = 'Sold 5 copies of Harry Potter'
        self.assertEqual(expected_result, result)
        self.assertEqual({'Harry Potter': 5}, self.book_store.availability_in_store_by_book_titles)

    def test_class_str_method_with_books_and_no_existing_book_available_left(self):
        self.book_store.receive_book('Harry Potter', 2)
        self.book_store.sell_book('Harry Potter', 2)
        self.book_store.receive_book('Harry Potter and GOF', 6)
        self.book_store.sell_book('Harry Potter and GOF', 6)
        result = self.book_store.__str__()
        expected_result = 'Total sold books: 8\nCurrent availability: 0\n - Harry Potter: 0 copies\n - Harry Potter and GOF: 0 copies'
        self.assertEqual(expected_result, result)

    def test_class_str_method_with_books_and_still_existing_book_available_left(self):
        self.book_store.receive_book('Harry Potter', 3)
        self.book_store.sell_book('Harry Potter', 2)
        self.book_store.receive_book('Harry Potter and GOF', 8)
        self.book_store.sell_book('Harry Potter and GOF', 6)
        result = self.book_store.__str__()
        expected_result = 'Total sold books: 8\nCurrent availability: 3\n - Harry Potter: 1 copies\n - Harry Potter and GOF: 2 copies'
        self.assertEqual(expected_result, result)

    def test_class_str_method_with_books_and_no_selling_book(self):
        self.book_store.receive_book('Harry Potter', 2)
        self.book_store.receive_book('Harry Potter and GOF', 6)
        result = self.book_store.__str__()
        expected_result = 'Total sold books: 0\nCurrent availability: 8\n - Harry Potter: 2 copies\n - Harry Potter and GOF: 6 copies'
        self.assertEqual(expected_result, result)


if __name__ == '__main__':
    main()
