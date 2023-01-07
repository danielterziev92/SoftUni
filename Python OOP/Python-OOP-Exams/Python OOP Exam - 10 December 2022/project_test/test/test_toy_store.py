from project.toy_store import ToyStore
from unittest import TestCase, main


class ToyStoreTest(TestCase):
    def setUp(self) -> None:
        self.toy_store = ToyStore()

    def test_on_initialization(self):
        toy_shelf = {
            "A": None,
            "B": None,
            "C": None,
            "D": None,
            "E": None,
            "F": None,
            "G": None,
        }
        self.assertEqual(toy_shelf, self.toy_store.toy_shelf)

    def test_add_method_with_shelf_not_in_toy_shelf_instance_attribute_raises(self):
        shelf = 'test'
        with self.assertRaises(Exception) as ex:
            self.toy_store.add_toy(shelf, '')

        result = ex.exception.__str__()
        expected_result = "Shelf doesn't exist!"
        self.assertEqual(expected_result, result)

    def test_add_method_with_toy_that_already_in_toy_shelf_instance_attribute_raises(self):
        shelf = 'A'
        toy_name = 'Monopoly'
        self.toy_store.toy_shelf[shelf] = toy_name
        self.assertTrue({shelf: None}, self.toy_store.toy_shelf[shelf])

        with self.assertRaises(Exception) as ex:
            self.toy_store.add_toy(shelf, toy_name)

        result = ex.exception.__str__()
        expected_result = 'Toy is already in shelf!'
        self.assertEqual(expected_result, result)

    def test_add_method_with_toy_that_already_exist_in_toy_shelf_instance_attribute_raises(self):
        shelf = 'A'
        toy_name = 'Monopoly'
        self.toy_store.toy_shelf[shelf] = 'Evropolia'
        self.assertTrue({shelf: None}, self.toy_store.toy_shelf[shelf])

        with self.assertRaises(Exception) as ex:
            self.toy_store.add_toy(shelf, toy_name)

        result = ex.exception.__str__()
        expected_result = 'Shelf is already taken!'
        self.assertEqual(expected_result, result)

    def test_add_method_with_correct_data_and_return_message(self):
        shelf = 'A'
        toy_name = 'Monopoly'

        self.assertTrue({shelf: None}, self.toy_store.toy_shelf[shelf])

        result = self.toy_store.add_toy(shelf, toy_name)
        expected_result = f'Toy:{toy_name} placed successfully!'
        self.assertEqual(expected_result, result)
        self.assertTrue({shelf: toy_name}, self.toy_store.toy_shelf[shelf])

    def test_remove_toy_shelf_that_does_not_exist_in_toy_shelf_instance_attribute_raises(self):
        shelf = 'test'

        with self.assertRaises(Exception) as ex:
            self.toy_store.remove_toy(shelf, '')

        result = ex.exception.__str__()
        expected_result = "Shelf doesn't exist!"

        self.assertEqual(expected_result, result)

    def test_remove_toy_with_toy_that_does_not_exist_in_toy_shelf_instance_attribute_raises(self):
        shelf = 'A'
        toy_name = 'Monopoly'
        existing_toy_name = 'Evropolia'

        with self.assertRaises(Exception) as ex:
            self.toy_store.add_toy(shelf, existing_toy_name)
            self.assertEqual(existing_toy_name, self.toy_store.toy_shelf[shelf])
            self.toy_store.remove_toy(shelf, toy_name)

        result = ex.exception.__str__()
        expected_result = "Toy in that shelf doesn't exists!"
        self.assertEqual(expected_result, result)

    def test_remove_toy_method_with_correct_data(self):
        shelf = 'A'
        shelf2 = 'B'
        toy_name = 'Monopoly'
        toy_name2 = 'Monopoly Bulgaria'

        self.assertEqual(None, self.toy_store.toy_shelf[shelf])
        self.assertEqual(None, self.toy_store.toy_shelf[shelf2])

        result = self.toy_store.add_toy(shelf, toy_name)
        self.assertEqual(toy_name, self.toy_store.toy_shelf[shelf])
        self.assertEqual(f'Toy:{toy_name} placed successfully!', result)

        self.toy_store.add_toy(shelf2, toy_name2)
        self.assertEqual(toy_name2, self.toy_store.toy_shelf[shelf2])

        result = self.toy_store.remove_toy(shelf, toy_name)
        self.assertEqual(None, self.toy_store.toy_shelf[shelf])
        self.assertEqual(f'Remove toy:{toy_name} successfully!', result)

        self.toy_store.remove_toy(shelf2, toy_name2)
        self.assertEqual(None, self.toy_store.toy_shelf[shelf2])


if __name__ == '__main__':
    main()
