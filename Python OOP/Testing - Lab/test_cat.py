class Cat:

    def __init__(self, name):
        self.name = name
        self.fed = False
        self.sleepy = False
        self.size = 0

    def eat(self):
        if self.fed:
            raise Exception('Already fed.')

        self.fed = True
        self.sleepy = True
        self.size += 1

    def sleep(self):
        if not self.fed:
            raise Exception('Cannot sleep while hungry')

        self.sleepy = False


from unittest import TestCase, main


class CatTest(TestCase):
    def test_cat_size_increased_after_eating(self):
        cat = Cat('Tom')

        self.assertEqual(0, cat.size)
        cat.eat()
        self.assertEqual(1, cat.size)

    def test_cat_is_fed_after_eating(self):
        cat = Cat('Tom')

        self.assertFalse(cat.fed)
        cat.eat()
        self.assertTrue(cat.fed)

    def test_cat_can_not_eat_if_is_fed_raises(self):
        cat = Cat('Tom')

        self.assertFalse(cat.fed)
        cat.eat()
        self.assertTrue(cat.fed)
        with self.assertRaises(Exception) as context:
            cat.eat()

        result = str(context.exception)
        expected_result = 'Already fed.'
        self.assertEqual(expected_result, result)

    def test_cat_can_not_fall_asleep_if_not_fed_raises(self):
        cat = Cat('Tom')

        self.assertFalse(cat.fed)
        self.assertFalse(cat.sleepy)
        with self.assertRaises(Exception) as context:
            cat.sleep()

        result = str(context.exception)
        expected_result = 'Cannot sleep while hungry'
        self.assertEqual(expected_result, result)

    def test_cat_is_not_sleep_after_sleeping(self):
        cat = Cat('Tom')

        cat.eat()
        self.assertTrue(cat.sleepy)
        cat.sleep()
        self.assertFalse(cat.sleepy)


if __name__ == '__main__':
    main()
