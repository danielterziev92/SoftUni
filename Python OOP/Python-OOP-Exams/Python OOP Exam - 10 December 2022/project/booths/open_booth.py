from project.booths.booth import Booth


class OpenBooth(Booth):
    PRICE = 2.5

    def __init__(self, booth_number: int, capacity: int):
        super().__init__(booth_number, capacity)

    def reserve(self, number_of_people: int):
        self.price_for_reservation = OpenBooth.PRICE * number_of_people
        self.is_reserved = True
