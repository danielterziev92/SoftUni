from unittest import TestCase, main

from project.mammal import Mammal


class MammalTest(TestCase):
    def test_name_property_on_initialization(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        expected_result = 'test_name'
        self.assertEqual(expected_result, mammal.name)

    def test_type_property_on_initialization(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        expected_result = 'test_type'
        self.assertEqual(expected_result, mammal.type)

    def test_sound_property_on_initialization(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        expected_result = 'test_sound'
        self.assertEqual(expected_result, mammal.sound)

    def test_kingdom_property_on_initialization(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        expected_result = 'animals'
        self.assertEqual(expected_result, mammal._Mammal__kingdom)

    def test_kingdom_property_on_initialization_equal_with_get_kingdom_method(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        self.assertEqual(mammal._Mammal__kingdom, mammal.get_kingdom())

    def test_make_sound_method_correctly(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        expected_result = 'test_name makes test_sound'
        self.assertEqual(expected_result, mammal.make_sound())

    def test_info_method_correctly(self):
        mammal = Mammal('test_name', 'test_type', 'test_sound')
        expected_result = 'test_name is of type test_type'
        self.assertEqual(expected_result, mammal.info())


if __name__ == '__main__':
    main()
