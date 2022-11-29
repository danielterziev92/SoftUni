from project.animals.animal import Bird


class Owl(Bird):

    def __init__(self, name: str, weight: float, wing_size: float):
        super().__init__(name, weight, wing_size)

    @property
    def food_allowed(self):
        return ['Meat']

    @property
    def weight_incremental(self):
        return 0.25

    def make_sound(self):
        return 'Hoot Hoot'


class Hen(Bird):

    def __init__(self, name: str, weight: float, wing_size: float):
        super().__init__(name, weight, wing_size)

    @property
    def food_allowed(self):
        return ['Vegetable', 'Fruit', 'Meat', 'Seed']

    @property
    def weight_incremental(self):
        return 0.35

    def make_sound(self):
        return 'Cluck'
