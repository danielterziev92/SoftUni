from extended_list import IntegerList
from unittest import TestCase, main


class IntegerListTest(TestCase):
    def test_integer_list_initialization_without_data(self):
        integers = IntegerList()
        self.assertFalse(integers._IntegerList__data)

    def test_integer_list_initialization_with_wrong_data(self):
        integers = IntegerList('test', 3.14, False)
        self.assertFalse(integers._IntegerList__data)

    def test_integer_list_initialization_integers(self):
        integers = IntegerList(1, 2, 3, 4)
        expected_result = [1, 2, 3, 4]
        self.assertEqual(expected_result, integers._IntegerList__data)

    def test_integer_list_get_data_with_correctly_data(self):
        integers = IntegerList(1, 2, 3, 4)
        expected_result = [1, 2, 3, 4]
        self.assertEqual(expected_result, integers.get_data())

    def test_integer_list_get_data_with_wrong_data(self):
        integers = IntegerList('a', 3.14, False)
        self.assertFalse(integers.get_data())

    def test_integer_list_out_of_index_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(IndexError) as ex:
            integers.get_data()[5]

    def test_integer_list_add_operation_with_integers(self):
        integers = IntegerList(1, 2, 3)
        expected_result = [1, 2, 3]
        self.assertEqual(expected_result, integers.get_data())
        integers.add(4)
        expected_result = [1, 2, 3, 4]
        self.assertEqual(expected_result, integers.get_data())

    def test_integer_list_add_operation_with_float_type_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(ValueError) as context:
            integers.add(3.14)

        result = str(context.exception)
        expected_result = "Element is not Integer"
        self.assertEqual(expected_result, result)

    def test_integer_list_add_operation_with_string_type_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(ValueError) as context:
            integers.add('test')

        result = str(context.exception)
        expected_result = "Element is not Integer"
        self.assertEqual(expected_result, result)

    def test_integer_list_add_operation_with_boolean_type_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(ValueError) as context:
            integers.add(True)

        result = str(context.exception)
        expected_result = "Element is not Integer"
        self.assertEqual(expected_result, result)

    def test_integer_list_remove_index_from_list_and_return_result(self):
        integers = IntegerList(1, 2, 3)
        expected_result = [1, 2, 3]
        self.assertEqual(expected_result, integers.get_data())
        integers.remove_index(2)
        expected_result = [1, 2]
        self.assertEqual(expected_result, integers.get_data())

    def test_integer_list_remove_index_with_out_of_range_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(IndexError) as context:
            integers.remove_index(5)

        result = str(context.exception)
        expected_result = "Index is out of range"
        self.assertEqual(expected_result, result)

    def test_integer_list_insert_integer_with_out_of_range_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(IndexError) as context:
            integers.insert(5, 4)

        result = str(context.exception)
        expected_result = "Index is out of range"
        self.assertEqual(expected_result, result)

    def test_integer_list_insert_not_integer_with_out_of_range_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(IndexError) as context:
            integers.insert(5, 3.14)

        result = str(context.exception)
        expected_result = "Index is out of range"
        self.assertEqual(expected_result, result)

    def test_integer_list_insert_not_integer_in_range_raises(self):
        integers = IntegerList(1, 2, 3)

        with self.assertRaises(ValueError) as context:
            integers.insert(2, 3.14)

        result = str(context.exception)
        expected_result = "Element is not Integer"
        self.assertEqual(expected_result, result)

    def test_integer_list_insert_integer_in_range_correctly(self):
        integers = IntegerList(1, 2, 3)
        integers.insert(0, 0)
        result = integers.get_data()
        expected_result = [0, 1, 2, 3]
        self.assertEqual(expected_result, result)

    def test_integer_list_get_biggest_element(self):
        integers = IntegerList(1, 2, 3)
        result = integers.get_biggest()
        expected_result = 3
        self.assertEqual(expected_result, result)

    def test_integer_list_do_not_get_biggest_element(self):
        integers = IntegerList(1, 2, 3)
        result = integers.get_biggest()
        expected_result = 1
        self.assertNotEqual(expected_result, result)

    def test_integer_list_get_index_of_element(self):
        integers = IntegerList(1, 2, 3)
        result = integers.get_index(3)
        expected_result = 2
        self.assertEqual(expected_result, result)

    def test_integer_list_get_wrong_index_of_element(self):
        integers = IntegerList(1, 2, 3)
        result = integers.get_index(3)
        expected_result = 3
        self.assertNotEqual(expected_result, result)


if __name__ == '__main__':
    main()
