from abc import ABC, abstractmethod

from project.fish.base_fish import BaseFish


class BaseAquarium(ABC):
    fish_types = ['FreshwaterFish', 'SaltwaterFish']

    @abstractmethod
    def __init__(self, name: str, capacity: int):
        self.name = name
        self.capacity = capacity
        self.decorations = list()
        self.fish = list()

    def __str__(self):
        result = list()
        result.append(f'{self.name}:')
        result.append(f'Fish: {" ".join(fish.name for fish in self.fish) if self.fish else "none"}')
        result.append(f'Decorations: {len(self.decorations)}')
        result.append(f'Comfort: {sum(decoration.comfort for decoration in self.decorations)}')
        return '\n'.join(result)

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        if not value:
            raise ValueError("Aquarium name cannot be an empty string.")
        self.__name = value

    def calculate_comfort(self):
        return sum(decoration.comfort for decoration in self.decorations)

    def add_fish(self, fish: BaseFish):
        if len(self.fish) == self.capacity:
            return 'Not enough capacity.'
        fish_type = fish.__class__.__name__

        if fish_type in BaseAquarium.fish_types:
            self.fish.append(fish)
            f'Successfully added {fish.species} to {self.name}.'

    def remove_fish(self, fish):
        if fish in self.fish:
            self.fish.remove(fish)

    def add_decoration(self, decoration):
        self.decorations.append(decoration)

    def feed(self):
        for fish in self.fish:
            fish.eat()
