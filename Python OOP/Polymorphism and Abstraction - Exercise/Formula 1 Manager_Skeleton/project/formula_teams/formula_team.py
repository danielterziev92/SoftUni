from abc import ABC, abstractmethod


class FormulaTeam(ABC):

    def __init__(self, budget: int):
        self.budget = budget

    @property
    def budget(self):
        return self.__budget

    @budget.setter
    def budget(self, value):
        if value < 1_000_000:
            raise ValueError('F1 is an expensive sport, find more sponsors!')
        self.__budget = value

    @abstractmethod
    def earned_money_from_sponsor(self, race_pos):
        pass

    def calculate_revenue_after_race(self, race_pos: int):
        revenue = self.earned_money_from_sponsor(race_pos)
        self.budget += revenue
        return f'The revenue after the race is {revenue}$. Current budget {self.budget}$'
