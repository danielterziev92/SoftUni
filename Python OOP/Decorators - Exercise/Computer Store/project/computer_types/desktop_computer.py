from project.computer_types.computer import Computer
from functools import wraps


def validation_configure_computer(function):
    @wraps(function)
    def _impl(self, *args):
        processor, ram = args
        if processor not in DesktopComputer.PROCESSOR_TYPE:
            raise ValueError(f'{processor} is not compatible with desktop computer {self.manufacturer} {self.model}!')

        if ram not in DesktopComputer.RAM_TYPE:
            raise ValueError(f'{ram}GB RAM is not compatible with desktop computer {self.manufacturer} {self.model}!')

        return function(self, processor, ram)

    return _impl


class DesktopComputer(Computer):
    PROCESSOR_TYPE = {'AMD Ryzen 7 5700G': 500, 'Intel Core i5-12600K': 600, 'Apple M1 Max': 1800, }
    RAM_TYPE = {2: 100, 4: 200, 8: 300, 16: 400, 32: 500, 64: 600, 128: 700, }

    def __init__(self, manufacturer: str, model: str):
        super().__init__(manufacturer, model)

    @validation_configure_computer
    def configure_computer(self, processor: str, ram: int):
        self.processor = processor
        self.ram = ram
        self.price = DesktopComputer.PROCESSOR_TYPE[processor] + DesktopComputer.RAM_TYPE[ram]

        return f'Created {self.manufacturer} {self.model} with {self.processor} and {self.ram}GB RAM for {self.price}$.'
