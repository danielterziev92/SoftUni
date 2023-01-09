from typing import List

from project.booths.booth import Booth
from project.booths.open_booth import OpenBooth
from project.booths.private_booth import PrivateBooth
from project.delicacies.delicacy import Delicacy
from project.delicacies.gingerbread import Gingerbread
from project.delicacies.stolen import Stolen


class ChristmasPastryShopApp:
    DELICACY_TYPES = {
        'Gingerbread': Gingerbread,
        'Stolen': Stolen,
    }
    BOOTH_TYPES = {
        'Open Booth': OpenBooth,
        'Private Booth': PrivateBooth,
    }

    def __init__(self):
        self.booths: List[Booth] = list()
        self.delicacies: List[Delicacy] = list()
        self.income: float = 0

    def add_delicacy(self, type_delicacy: str, name: str, price: float):
        if name in [d.name for d in self.delicacies]:
            raise Exception(f'{name} already exists!')

        try:
            delicacy = ChristmasPastryShopApp.DELICACY_TYPES[type_delicacy](name, price)
            self.delicacies.append(delicacy)

            return f'Added delicacy {name} - {type_delicacy} to the pastry shop.'
        except KeyError:
            raise Exception(f'{type_delicacy} is not on our delicacy menu!')

    def add_booth(self, type_booth: str, booth_number: int, capacity: int):
        if booth_number in [b.booth_number for b in self.booths]:
            raise Exception(f'Booth number {booth_number} already exists!')

        try:
            booth = ChristmasPastryShopApp.BOOTH_TYPES[type_booth](booth_number, capacity)
            self.booths.append(booth)

            return f'Added booth number {booth_number} in the pastry shop.'
        except KeyError:
            raise Exception(f'{type_booth} is not a valid booth!')

    def reserve_booth(self, number_of_people: int):
        try:
            booth = [b for b in self.booths if not b.is_reserved and b.capacity >= number_of_people][0]
        except IndexError:
            raise Exception(f'No available booth for {number_of_people} people!')

        booth.reserve(number_of_people)

        return f'Booth {booth.booth_number} has been reserved for {number_of_people} people.'

    def order_delicacy(self, booth_number: int, delicacy_name: str):
        try:
            booth = [b for b in self.booths if b.booth_number == booth_number][0]
        except IndexError:
            raise Exception(f'Could not find booth {booth_number}!')

        try:
            delicacy = [d for d in self.delicacies if d.name == delicacy_name][0]
        except IndexError:
            raise Exception(f'No {delicacy_name} in the pastry shop!')

        booth.delicacy_orders.append(delicacy)

        return f'Booth {booth_number} ordered {delicacy_name}.'

    def leave_booth(self, booth_number: int):
        booth = [b for b in self.booths if b.booth_number == booth_number][0]
        delicacy_orders = [d.price for d in booth.delicacy_orders]
        bill = booth.price_for_reservation + sum(delicacy_orders)

        self.income += bill
        booth.delicacy_orders.clear()
        booth.is_reserved = False
        booth.price_for_reservation = 0

        return f'Booth {booth_number}:\nBill: {bill:.2f}lv.'

    def get_income(self):
        return f'Income: {self.income:.2f}lv.'
