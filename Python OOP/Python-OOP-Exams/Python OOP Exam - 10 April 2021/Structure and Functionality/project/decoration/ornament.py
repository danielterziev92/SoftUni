from project.decoration.base_decoration import BaseDecoration


class Ornament(BaseDecoration):
    price = 5
    comfort = 1

    def __init__(self):
        super().__init__(Ornament.comfort, Ornament.price)
