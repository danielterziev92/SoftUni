from unittest import TestCase, main
from project.vehicle import Vehicle


class VehicleTest(TestCase):
    FUEL = 1
    HORSE_POWER = 1
    DEFAULT_FUEL_CONSUMPTION = 1.25

    def setUp(self) -> None:
        self.vehicle = Vehicle(self.FUEL, self.HORSE_POWER)

    def test_properties_on_initialization(self):
        self.assertEqual(self.FUEL, self.vehicle.fuel)
        self.assertEqual(self.FUEL, self.vehicle.capacity)
        self.assertEqual(self.HORSE_POWER, self.vehicle.horse_power)
        self.assertEqual(self.DEFAULT_FUEL_CONSUMPTION, self.vehicle.fuel_consumption)

    def test_drive_method_with_value_more_then_fuel_amount_raises(self):
        with self.assertRaises(Exception) as context:
            self.vehicle.drive(10)

        result = str(context.exception)
        expected_result = 'Not enough fuel'
        self.assertEqual(expected_result, result)

    def test_drive_method_with_less_value_then_fuel_amount(self):
        self.assertEqual(1, self.vehicle.fuel)
        kilometers = 0.5
        self.vehicle.drive(kilometers)
        expected_result = self.FUEL - (self.DEFAULT_FUEL_CONSUMPTION * kilometers)
        self.assertEqual(expected_result, self.vehicle.fuel)

    def test_drive_method_with_equal_value_that_fuel_amount_raises(self):
        self.assertEqual(1, self.vehicle.fuel)
        kilometers = 1
        with self.assertRaises(Exception) as context:
            self.vehicle.drive(kilometers)
        result = str(context.exception)
        expected_result = 'Not enough fuel'
        self.assertEqual(expected_result, result)

    def test_refuel_method_with_more_fuel_then_the_capacity_raises(self):
        self.assertEqual(self.FUEL, self.vehicle.fuel)
        with self.assertRaises(Exception) as context:
            self.vehicle.refuel(10)
        result = str(context.exception)
        expected_result = "Too much fuel"
        self.assertEqual(expected_result, result)

    def test_refuel_method_with_equal_fuel_then_the_capacity_raises_raises(self):
        self.assertEqual(self.FUEL, self.vehicle.fuel)
        with self.assertRaises(Exception) as context:
            self.vehicle.refuel(self.FUEL)
        result = str(context.exception)
        expected_result = "Too much fuel"
        self.assertEqual(expected_result, result)

    def test_refuel_method_with_less_fuel_then_the_capacity_raises_raises(self):
        self.assertEqual(self.FUEL, self.vehicle.fuel)
        kilometers = 0.5
        self.vehicle.drive(kilometers)
        expected_result = self.FUEL - (self.DEFAULT_FUEL_CONSUMPTION * kilometers)
        self.assertEqual(expected_result, self.vehicle.fuel)
        self.vehicle.refuel(kilometers)
        self.assertEqual(expected_result + kilometers, self.vehicle.fuel)

    def test_string_method(self):
        result = self.vehicle.__str__()
        expected_result = f"The vehicle has {self.HORSE_POWER} " \
                          f"horse power with {self.FUEL} fuel left and {self.DEFAULT_FUEL_CONSUMPTION} fuel consumption"
        self.assertEqual(expected_result, result)


if __name__ == '__main__':
    main()
