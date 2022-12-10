from project.decoration.base_decoration import BaseDecoration


class Plant(BaseDecoration):
    price = 10
    comfort = 5

    def __init__(self):
        super().__init__(Plant.comfort, Plant.price)
