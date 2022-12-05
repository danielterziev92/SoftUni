from project.animals.animal import Mammal


class Mouse(Mammal):

    def __init__(self, name: str, weight: float, living_region: str):
        super().__init__(name, weight, living_region)

    @property
    def food_allowed(self):
        return ['Vegetable', 'Fruit']

    @property
    def weight_incremental(self):
        return 0.1

    def make_sound(self):
        return 'Squeak'


class Dog(Mammal):

    def __init__(self, name: str, weight: float, living_region: str):
        super().__init__(name, weight, living_region)

    @property
    def food_allowed(self):
        return ['Meat']

    @property
    def weight_incremental(self):
        return 0.4

    def make_sound(self):
        return 'Woof!'


class Cat(Mammal):

    def __init__(self, name: str, weight: float, living_region: str):
        super().__init__(name, weight, living_region)

    @property
    def food_allowed(self):
        return ['Vegetable', 'Meat']

    @property
    def weight_incremental(self):
        return 0.3

    def make_sound(self):
        return 'Meow'


class Tiger(Mammal):

    def __init__(self, name: str, weight: float, living_region: str):
        super().__init__(name, weight, living_region)

    @property
    def food_allowed(self):
        return ['Meat']

    @property
    def weight_incremental(self):
        return 1

    def make_sound(self):
        return 'ROAR!!!'
