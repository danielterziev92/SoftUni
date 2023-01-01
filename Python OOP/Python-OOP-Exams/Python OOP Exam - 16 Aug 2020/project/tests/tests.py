from unittest import TestCase, main

from project.hardware.hardware import Hardware
from project.software.software import Software


class TestHardware(TestCase):
    NAME = 'test'
    HARDWARE_TYPE = 'Heavy'
    CAPACITY = 100
    MEMORY = 100

    def setUp(self):
        self.hardware = Hardware(self.NAME, self.HARDWARE_TYPE, self.CAPACITY, self.MEMORY)

    def test_all_attributes_on_initialization(self):
        self.assertEqual(self.NAME, self.hardware.name)
        self.assertEqual(self.HARDWARE_TYPE, self.hardware.hardware_type)
        self.assertEqual(self.CAPACITY, self.hardware.capacity)
        self.assertEqual(self.MEMORY, self.hardware.memory)
        self.assertEqual([], self.hardware.software_components)

    def test_used_memory_property_without_software(self):
        self.assertEqual(0, self.hardware.used_memory)

    def test_used_memory_property_with_software(self):
        software = Software('test', 'Light', 50, 50)
        self.assertEqual(0, self.hardware.used_memory)
        self.hardware.install(software)
        self.assertEqual(50, self.hardware.used_memory)

    def test_used_capacity_property_without_software(self):
        self.assertEqual(0, self.hardware.used_capacity)

    def test_used_capacity_property_with_software(self):
        software = Software('test', 'Light', 50, 50)
        self.assertEqual(0, self.hardware.used_capacity)
        self.hardware.install(software)
        self.assertEqual(50, self.hardware.used_capacity)

    def test_available_memory_property_without_software(self):
        self.assertEqual(self.MEMORY, self.hardware.available_memory)

    def test_available_memory_property_with_software(self):
        software = Software('test', 'Light', 50, 50)
        self.assertEqual(self.MEMORY, self.hardware.available_memory)
        self.hardware.install(software)
        self.assertEqual(self.MEMORY - software.memory_consumption, self.hardware.available_memory)

    def test_available_capacity_property_without_software(self):
        self.assertEqual(self.CAPACITY, self.hardware.available_capacity)

    def test_available_capacity_property_with_software(self):
        software = Software('test', 'Light', 50, 50)
        self.assertEqual(self.CAPACITY, self.hardware.available_capacity)
        self.hardware.install(software)
        self.assertEqual(self.CAPACITY - software.capacity_consumption, self.hardware.available_capacity)

    def test_install_method_when_do_not_have_enough_memory_raises(self):
        software = Software('test', 'Light', 50, 101)
        self.assertEqual(self.CAPACITY, self.hardware.capacity)
        self.assertEqual(self.MEMORY, self.hardware.memory)
        with self.assertRaises(Exception) as ex:
            self.hardware.install(software)
        result = str(ex.exception)
        expected_result = 'Software cannot be installed'
        self.assertEqual(expected_result, result)

    def test_install_method_when_do_not_have_enough_capacity_raises(self):
        software = Software('test', 'Light', 101, 50)
        self.assertEqual(self.CAPACITY, self.hardware.capacity)
        self.assertEqual(self.MEMORY, self.hardware.memory)
        with self.assertRaises(Exception) as ex:
            self.hardware.install(software)
        result = str(ex.exception)
        expected_result = 'Software cannot be installed'
        self.assertEqual(expected_result, result)

    def test_install_method_successfully(self):
        software = Software('test', 'Light', 100, 100)
        self.assertEqual(self.CAPACITY, self.hardware.capacity)
        self.assertEqual(self.MEMORY, self.hardware.memory)
        self.hardware.install(software)
        self.assertEqual(self.MEMORY - software.memory_consumption, self.hardware.available_memory)
        self.assertEqual(self.CAPACITY - software.capacity_consumption, self.hardware.available_capacity)

    def test_uninstall_method_when_software_does_not_exist_raises(self):
        software = Software('test', 'Light', 50, 50)
        result = self.hardware.uninstall(software)
        self.assertEqual(None, result)

    def test_uninstall_method_when_software_much_successfully(self):
        software = Software('test', 'Light', 50, 50)
        self.hardware.install(software)
        self.assertEqual(software, self.hardware.software_components[0])
        self.hardware.uninstall(software)
        self.assertEqual([], self.hardware.software_components)


if __name__ == '__main__':
    main()
