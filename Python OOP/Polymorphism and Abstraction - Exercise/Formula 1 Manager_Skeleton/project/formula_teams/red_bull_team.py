from project.formula_teams.formula_team import FormulaTeam


class RedBullTeam(FormulaTeam):

    def __init__(self, budget: int):
        super().__init__(budget)

    def earned_money_from_sponsor(self, race_pos):
        sponsors_money = {
            1: 1_520_000,
            2: 820_000,
            3: 20_000,
            4: 20_000,
            5: 20_000,
            6: 20_000,
            7: 20_000,
            8: 20_000,
            9: 10_000,
            10: 10_000
        }
        earned_money = sponsors_money.get(race_pos, 0)
        expenses_per_race = 250_000
        result = earned_money - expenses_per_race

        return result
