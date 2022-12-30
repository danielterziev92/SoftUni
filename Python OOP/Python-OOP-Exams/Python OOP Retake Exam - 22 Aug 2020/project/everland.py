from project.rooms.room import Room


class Everland:
    def __init__(self):
        self.rooms = list()

    @property
    def total_population(self):
        return sum(room.members_count for room in self.rooms)

    def add_room(self, room: Room):
        self.rooms.append(room)

    def get_monthly_consumptions(self):
        result = sum(room.total_expenses for room in self.rooms)
        return f'Monthly consumption: {result:.2f}$.'

    def pay(self):
        result = [self.__pay_for_room(room) for room in self.rooms]
        return '\n'.join(result)

    def status(self):
        room_results = [str(room) for room in self.rooms]
        result = [f'Total population: {self.total_population}',
                  *room_results, ]

        return '\n'.join(result)

    def __pay_for_room(self, room: Room):
        if room.budget < room.total_expenses:
            self.__remove_room(room)
            return f'{room.family_name} does not have enough budget and must leave the hotel.'
        budget_left = room.budget - room.total_expenses
        return f'{room.family_name} paid {room.total_expenses:.2f}$ and have {budget_left:.2f}$ left.'

    def __remove_room(self, room):
        self.rooms.remove(room)

    def __get_room_status(self, room):
        pass
