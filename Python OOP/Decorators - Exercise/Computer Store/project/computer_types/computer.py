from abc import ABC, abstractmethod


class Computer(ABC):
    def __init__(self, manufacturer: str, model: str):
        self.manufacturer = manufacturer
        self.model = model
        self.processor = None
        self.ram = None
        self.price = 0

    def __repr__(self):
        return f'{self.__manufacturer} {self.__model} with {self.processor} and {self.ram}GB RAM'

    @property
    def manufacturer(self):
        return self.__manufacturer

    @manufacturer.setter
    def manufacturer(self, value):
        if not value.strip():
            raise ValueError('Manufacturer name cannot be empty.')
        self.__manufacturer = value

    @property
    def model(self):
        return self.__model

    @model.setter
    def model(self, value):
        if not value.strip():
            raise ValueError('Model name cannot be empty.')
        self.__model = value

    @abstractmethod
    def configure_computer(self, processor: str, ram: int):
        pass
