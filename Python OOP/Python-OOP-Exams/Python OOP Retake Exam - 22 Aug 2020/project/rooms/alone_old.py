from project.rooms.room import Room


class AloneOld(Room):
    room_cost = 10
    room_members = 1

    def __init__(self, family_name: str, pension: float):
        super().__init__(family_name, pension, AloneOld.room_members)
