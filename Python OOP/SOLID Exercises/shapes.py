import math
from abc import ABC, abstractmethod


class Shape(ABC):
    @abstractmethod
    def calc_area(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calc_area(self):
        return self.height * self.width


class Triangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calc_area(self):
        return (self.width * self.height) / 2


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calc_area(self):
        return self.radius ** 2 * math.pi


class AreaCalculator:
    def __init__(self, shapes):
        self.shapes = shapes

    @property
    def total_area(self):
        total = 0
        for shape in self.shapes:
            total += shape.calc_area()

        return total

    @property
    def shapes(self):
        return self.__shapes

    @shapes.setter
    def shapes(self, value):
        assert isinstance(shapes, list), "`shapes` should be of type `list`."
        self.__shapes = value


shapes = [Rectangle(1, 6), Triangle(2, 3)]
calculator = AreaCalculator(shapes)
print("The total area is: ", calculator.total_area)
