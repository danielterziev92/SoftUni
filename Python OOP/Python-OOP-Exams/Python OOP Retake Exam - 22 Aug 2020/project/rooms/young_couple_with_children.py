from project.appliances.fridge import Fridge
from project.appliances.laptop import Laptop
from project.appliances.tv import TV
from project.rooms.room import Room


class YoungCoupleWithChildren(Room):
    room_cost = 30
    room_members = 2
    appliances_types = (TV, Fridge, Laptop)

    def __init__(self, family_name: str, salary_one: float, salary_two: float, *children):
        members = self.room_members + len(children)
        super().__init__(family_name, salary_one + salary_two, members)
        self.children = list(children)
        self.calculate_expenses(self.appliances, self.children)
