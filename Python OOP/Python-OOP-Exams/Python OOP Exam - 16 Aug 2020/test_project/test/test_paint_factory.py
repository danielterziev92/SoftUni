from unittest import TestCase, main

from project.factory.factory import Factory
from project.factory.paint_factory import PaintFactory


class TestPaintFactory(TestCase):
    NAME = 'test'
    CAPACITY = 10

    def setUp(self):
        self.paint_factory = PaintFactory(self.NAME, self.CAPACITY)

    def test_abstract_method_init_from_Factory_class(self):
        with self.assertRaises(TypeError) as ex:
            Factory(self.NAME, self.CAPACITY)
        result = str(ex.exception)
        expected_result = "Can't instantiate abstract class Factory with abstract methods __init__," \
                          " add_ingredient, remove_ingredient"
        self.assertEqual(expected_result, result)

    def test_attributes_on_initialization(self):
        valid_ingredients = ["white", "yellow", "blue", "green", "red"]
        self.assertEqual(self.NAME, self.paint_factory.name)
        self.assertEqual(self.CAPACITY, self.paint_factory.capacity)
        self.assertEqual({}, self.paint_factory.ingredients)
        self.assertEqual(valid_ingredients, self.paint_factory.valid_ingredients)
        self.assertEqual({}, self.paint_factory.products)

    def test_products_property_without_any_date(self):
        self.assertEqual({}, self.paint_factory.products)

    def test_can_add_method_with_bigger_value_then_capacity(self):
        self.assertEqual(self.CAPACITY, self.paint_factory.capacity)
        product_quantity = 11
        self.assertFalse(self.paint_factory.can_add(product_quantity))

    def test_can_add_method_successful(self):
        self.assertEqual(self.CAPACITY, self.paint_factory.capacity)
        product_quantity = 10
        self.assertTrue(self.paint_factory.can_add(product_quantity))
        product_quantity = 5
        self.assertTrue(self.paint_factory.can_add(product_quantity))

    def test_add_ingredient_method_when_product_type_is_not_in_valid_ingredients_raises(self):
        self.assertEqual(["white", "yellow", "blue", "green", "red"], self.paint_factory.valid_ingredients)
        product_type = 'purple'
        with self.assertRaises(TypeError) as ex:
            self.paint_factory.add_ingredient(product_type, 0)
        result = str(ex.exception)
        expected_result = f'Ingredient of type {product_type} not allowed in {self.paint_factory.__class__.__name__}'
        self.assertEqual(expected_result, result)

    def test_add_ingredient_method_when_product_type_is_in_valid_ingredients_and_can_add_method_with_bigger_quality_raises(
            self):
        self.assertEqual(["white", "yellow", "blue", "green", "red"], self.paint_factory.valid_ingredients)
        product_type = 'white'
        product_quantity = 11
        with self.assertRaises(ValueError) as ex:
            self.paint_factory.add_ingredient(product_type, product_quantity)
        result = str(ex.exception)
        expected_result = 'Not enough space in factory'
        self.assertEqual(expected_result, result)

    def test_add_ingredient_method_successful(self):
        self.assertEqual(["white", "yellow", "blue", "green", "red"], self.paint_factory.valid_ingredients)
        product_type = 'white'
        product_quantity = 10
        self.paint_factory.add_ingredient(product_type, product_quantity)
        self.assertEqual({product_type: product_quantity}, self.paint_factory.ingredients)
        return product_type, product_quantity

    def test_remove_ingredient_product_type_with_wrong_data_raises(self):
        product_type, product_quantity = self.test_add_ingredient_method_successful()
        with self.assertRaises(KeyError) as ex:
            self.paint_factory.remove_ingredient(product_type + 'test', product_quantity)
        print(str(ex.exception))
        result = str(ex.exception).replace("'", '')
        expected_result = 'No such ingredient in the factory'
        self.assertEqual(expected_result, result)

    def test_remove_ingredient_product_type_correct_but_product_quantity_with_bigger_value_raises(self):
        product_type, product_quantity = self.test_add_ingredient_method_successful()
        with self.assertRaises(ValueError) as ex:
            self.paint_factory.remove_ingredient(product_type, product_quantity + 10)
        result = str(ex.exception)
        expected_result = "Ingredients quantity cannot be less than zero"
        self.assertEqual(expected_result, result)

    def test_remove_ingredient_successful(self):
        product_type, product_quantity = self.test_add_ingredient_method_successful()
        quantity_before = self.paint_factory.ingredients[product_type]
        self.paint_factory.remove_ingredient(product_type, product_quantity)
        self.assertEqual({product_type: quantity_before - product_quantity}, self.paint_factory.ingredients)

    def test_products_property_with_date(self):
        product_type, product_quantity = self.test_add_ingredient_method_successful()
        self.assertEqual({product_type: product_quantity}, self.paint_factory.products)

    def test_repr_method_without_any_data(self):
        result = self.paint_factory.__repr__()
        expected_result = f"Factory name: {self.NAME} with capacity {self.CAPACITY}.\n"
        self.assertEqual(expected_result, result)

    def test_repr_method_with_data(self):
        product_type, product_quantity = self.test_add_ingredient_method_successful()
        result = self.paint_factory.__repr__()
        expected_result = f"Factory name: {self.NAME} with capacity {self.CAPACITY}.\n" \
                          f"{product_type}: {product_quantity}\n"
        self.assertEqual(expected_result, result)


if __name__ == '__main__':
    main()
