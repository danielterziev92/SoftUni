from typing import List

from project.jockey import Jockey


class HorseRace:
    RACE_TYPE = ['Winter', 'Spring', 'Autumn', 'Summer']

    def __init__(self, race_type: str):
        self.race_type = race_type
        self.jockeys: List[Jockey] = list()

    @property
    def race_type(self):
        return self.__race_type

    @race_type.setter
    def race_type(self, value):
        if value not in HorseRace.RACE_TYPE:
            raise ValueError('Race type does not exist!')
        self.__race_type = value
