from project.booths.booth import Booth


class PrivateBooth(Booth):
    PRICE = 3.5

    def __init__(self, booth_number: int, capacity: int):
        super().__init__(booth_number, capacity)

    def reserve(self, number_of_people: int):
        self.price_for_reservation = PrivateBooth.PRICE * number_of_people
        self.is_reserved = True
