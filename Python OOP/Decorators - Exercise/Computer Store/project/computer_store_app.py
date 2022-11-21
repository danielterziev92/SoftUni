import sys
from project.computer_types.desktop_computer import DesktopComputer
from project.computer_types.laptop import Laptop


def validate_type(func):
    def wrapper(*args):
        type_class, type_computer, manufacturer, model, processor, ram = args
        if type_computer not in ['Laptop', 'Desktop Computer']:
            raise ValueError(f'{type_computer} is not a valid type computer!')

        if type_computer == 'Desktop Computer':
            type_computer = 'DesktopComputer'
        return func(type_class, type_computer, manufacturer, model, processor, ram)

    return wrapper


class ComputerStoreApp:

    def __init__(self):
        self.warehouse = list()
        self.profits = 0

    @validate_type
    def build_computer(self, type_computer: str, manufacturer: str, model: str, processor: str, ram: int):
        computer = getattr(sys.modules[__name__], type_computer)(manufacturer, model)
        message = computer.configure_computer(processor, ram)
        self.warehouse.append(computer)
        return message

    def sell_computer(self, client_budget: int, wanted_processor: str, wanted_ram: int):
        for computer in self.warehouse:
            if computer.processor == wanted_processor and computer.ram >= wanted_ram and computer.price <= client_budget:
                self.profits += client_budget - computer.price
                self.warehouse.remove(computer)
                return f'{computer} sold for {client_budget}$.'
        raise Exception(f"Sorry, we don't have a computer for you.")
