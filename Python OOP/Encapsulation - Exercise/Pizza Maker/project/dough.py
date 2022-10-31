from project.topping import Topping


class Dough(Topping):
    def __init__(self, flour_type: str, baking_technique: str, weight: float):
        super().__init__(flour_type, weight)
        self.baking_technique = baking_technique


d = Dough('asd', 'asd', 10)
print(d)
