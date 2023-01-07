from typing import List

from project.horse_specification.appaloosa import Appaloosa
from project.horse_specification.thoroughbred import Thoroughbred
from project.horse_specification.horse import Horse
from project.jockey import Jockey

from project.horse_race import HorseRace


class HorseRaceApp:
    HORSE_TYPES = {
        'Appaloosa': Appaloosa,
        'Thoroughbred': Thoroughbred
    }

    def __init__(self):
        self.horses: List[Horse] = list()
        self.jockeys: List[Jockey] = list()
        self.horse_races: List[HorseRace] = list()

    @staticmethod
    def _is_exist(name, entities):
        for entity in entities:
            if entity.name == name:
                return True
        return False

    def add_horse(self, horse_type: str, horse_name: str, horse_speed: int):
        if self._is_exist(horse_name, self.horses):
            raise Exception(f'Horse {horse_name} has been already added!')

        if horse_type in HorseRaceApp.HORSE_TYPES.keys():
            horse = HorseRaceApp.HORSE_TYPES[horse_type](horse_name, horse_speed)
            self.horses.append(horse)
            return f'{horse_type} horse {horse_name} is added.'

    def add_jockey(self, jockey_name: str, age: int):
        if self._is_exist(jockey_name, self.jockeys):
            raise Exception(f'Jockey {jockey_name} has been already added!')

        jockey = Jockey(jockey_name, age)
        self.jockeys.append(jockey)
        return f'Jockey {jockey_name} is added.'

    def create_horse_race(self, race_type: str):
        if race_type in [race.race_type for race in self.horse_races]:
            raise Exception(f'Race {race_type} has been already created!')

        horse_race = HorseRace(race_type)
        self.horse_races.append(horse_race)
        return f'Race {race_type} is created.'

    def add_horse_to_jockey(self, jockey_name: str, horse_type: str):
        try:
            jockey = next(filter(lambda j: j.name == jockey_name, self.jockeys))
        except StopIteration:
            raise Exception(f'Jockey {jockey_name} could not be found!')

        try:
            horse = [horse for horse in self.horses if horse.__class__.__name__ == horse_type and not horse.is_taken][
                -1]
        except IndexError:
            raise Exception(f'Horse breed {horse_type} could not be found!')

        if jockey.horse:
            return f'Jockey {jockey_name} already has a horse.'

        jockey.horse = horse
        jockey.horse.is_taken = True
        return f'Jockey {jockey_name} will ride the horse {horse.name}.'

    def add_jockey_to_horse_race(self, race_type: str, jockey_name: str):
        try:
            horse_race = next(filter(lambda hr: hr.race_type == race_type, self.horse_races))
        except StopIteration:
            raise Exception(f'Race {race_type} could not be found!')

        try:
            jockey = next(filter(lambda j: j.name == jockey_name, self.jockeys))
        except StopIteration:
            raise Exception(f'Jockey {jockey_name} could not be found!')

        if not jockey.horse:
            raise Exception(f'Jockey {jockey_name} cannot race without a horse!')

        if jockey in horse_race.jockeys:
            return f'Jockey {jockey_name} has been already added to the {race_type} race.'

        horse_race.jockeys.append(jockey)
        return f'Jockey {jockey_name} added to the {race_type} race.'

    def start_horse_race(self, race_type: str):
        try:
            horse_race = next(filter(lambda hr: hr.race_type == race_type, self.horse_races))
        except StopIteration:
            raise Exception(f'Race {race_type} could not be found!')

        if len(horse_race.jockeys) < 2:
            raise Exception(f'Horse race {race_type} needs at least two participants!')

        speed = 0
        winner = None

        for jockey in horse_race.jockeys:
            if jockey.horse.speed > speed:
                speed = jockey.horse.speed
                winner = jockey

        horse_name = winner.horse.name
        jockey_name = winner.name
        return f"The winner of the {race_type} race, with a speed of {speed}km/h is {jockey_name}! " \
               f"Winner's horse: {horse_name}."
