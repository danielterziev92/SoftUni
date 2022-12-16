from car_manager import Car
from unittest import TestCase, main


class CarTest(TestCase):
    def test_make_property_with_no_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car('', 'test', 10, 10)

        result = str(context.exception)
        expected_result = "Make cannot be null or empty!"
        self.assertEqual(expected_result, result)

    def test_make_property_with_zero_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(0, 'test', 10, 10)

        result = str(context.exception)
        expected_result = "Make cannot be null or empty!"
        self.assertEqual(expected_result, result)

    def test_make_property_with_positive_value(self):
        car = Car(1, 'test', 10, 10)

        result = car.make
        expected_result = 1
        self.assertEqual(expected_result, result)

    def test_model_property_with_no_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(1, '', 10, 10)

        result = str(context.exception)
        expected_result = "Model cannot be null or empty!"
        self.assertEqual(expected_result, result)

    def test_model_property_with_zero_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(1, 0, 10, 10)

        result = str(context.exception)
        expected_result = "Model cannot be null or empty!"
        self.assertEqual(expected_result, result)

    def test_model_property_with_positive_value(self):
        car = Car(1, 'test', 10, 10)

        result = car.make
        expected_result = 1
        self.assertEqual(expected_result, result)

    def test_fuel_consumption_property_with_negative_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(1, 'test', -1, 10)

        result = str(context.exception)
        expected_result = "Fuel consumption cannot be zero or negative!"
        self.assertEqual(expected_result, result)

    def test_fuel_consumption_property_with_zero_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(1, 'test', 0, 10)

        result = str(context.exception)
        expected_result = "Fuel consumption cannot be zero or negative!"
        self.assertEqual(expected_result, result)

    def test_fuel_consumption_property_with_positive_value(self):
        car = Car(1, 'test', 1, 10)

        result = car.fuel_consumption
        expected_result = 1
        self.assertEqual(expected_result, result)

    def test_fuel_capacity_property_with_negative_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(1, 'test', 1, -1)

        result = str(context.exception)
        expected_result = "Fuel capacity cannot be zero or negative!"
        self.assertEqual(expected_result, result)

    def test_fuel_capacity_property_with_zero_value_raises(self):
        with self.assertRaises(Exception) as context:
            car = Car(1, 'test', 1, 0)

        result = str(context.exception)
        expected_result = "Fuel capacity cannot be zero or negative!"
        self.assertEqual(expected_result, result)

    def test_fuel_capacity_property_with_positive_value(self):
        car = Car(1, 'test', 1, 1)

        result = car.fuel_consumption
        expected_result = 1
        self.assertEqual(expected_result, result)

    def test_fuel_amount_property_with_negative_value_raises(self):
        car = Car(1, 'test', 1, 1)

        self.assertEqual(0, car.fuel_amount)

        with self.assertRaises(Exception) as context:
            car.fuel_amount -= 1

        result = str(context.exception)
        expected_result = "Fuel amount cannot be negative!"
        self.assertEqual(expected_result, result)

    def test_fuel_amount_property_with_positive_value(self):
        car = Car(1, 'test', 1, 1)

        self.assertEqual(0, car.fuel_amount)
        car.fuel_amount += 1
        expected_result = 1
        self.assertEqual(expected_result, car.fuel_amount)

    def test_refuel_method_with_negative_value_raises(self):
        car = Car(1, 'test', 1, 1)

        with self.assertRaises(Exception) as context:
            car.refuel(-1)

        result = str(context.exception)
        expected_result = "Fuel amount cannot be zero or negative!"
        self.assertEqual(expected_result, result)

    def test_refuel_method_with_zero_value_raises(self):
        car = Car(1, 'test', 1, 1)

        with self.assertRaises(Exception) as context:
            car.refuel(0)

        result = str(context.exception)
        expected_result = "Fuel amount cannot be zero or negative!"
        self.assertEqual(expected_result, result)

    def test_refuel_method_with_positive_value_with_correct_capacity(self):
        car = Car(1, 'test', 1, 1)

        self.assertEqual(0, car.fuel_amount)
        car.refuel(1)
        self.assertEqual(1, car.fuel_amount)

    def test_refuel_method_with_positive_value_and_less_capacity(self):
        car = Car(1, 'test', 1, 1)

        self.assertEqual(0, car.fuel_amount)
        self.assertEqual(1, car.fuel_capacity)
        car.refuel(10)
        self.assertEqual(1, car.fuel_amount)

    def test_drive_with_less_fuel_amount_raises(self):
        car = Car(1, 'test', 1, 1)

        with self.assertRaises(Exception) as context:
            car.drive(10)

        result = str(context.exception)
        expected_result = "You don't have enough fuel to drive!"
        self.assertEqual(expected_result, result)

    def test_drive_with_fuel_amount_equal_to_fuel_needed(self):
        car = Car(1, 'test', 1, 1)

        self.assertEqual(0, car.fuel_amount)
        car.refuel(1)
        self.assertEqual(1, car.fuel_amount)
        car.drive(1)
        self.assertEqual(0.99, car.fuel_amount)

    def test_drive_with_fuel_amount_less_then_fuel_needed(self):
        car = Car(1, 'test', 1, 1)

        self.assertEqual(0, car.fuel_amount)
        car.refuel(0.5)
        self.assertEqual(0.5, car.fuel_amount)
        car.drive(1)
        self.assertEqual(0.49, car.fuel_amount)


if __name__ == '__main__':
    main()
