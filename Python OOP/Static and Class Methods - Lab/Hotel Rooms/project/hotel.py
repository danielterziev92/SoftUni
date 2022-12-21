from project.room import Room


class Hotel:

    def __init__(self, name: str):
        self.name = name
        self.rooms = list()
        
    @property
    def guests(self):
        return sum([r.guests for r in self.rooms])

    @classmethod
    def from_stars(cls, stars_count: int):
        return cls(f'{stars_count} stars Hotel')

    def add_room(self, room: Room):
        self.rooms.append(room)

    def take_room(self, room_number, people):
        for room in self.rooms:
            if room.number == room_number and not room.is_taken:
                return room.take_room(people)

    def free_room(self, room_number):
        for room in self.rooms:
            if room.number == room_number:
                return room.free_room()

    def status(self):
        result = f'Hotel {self.name} has {self.guests} total guests\n'
        free_rooms = []
        taken_rooms = []
        for room in self.rooms:
            if room.is_taken:
                taken_rooms.append(str(room.number))
            else:
                free_rooms.append(str(room.number))
        result += f'Free rooms: {", ".join(free_rooms)}\n'
        result += f'Taken rooms: {", ".join(taken_rooms)}'

        return result
