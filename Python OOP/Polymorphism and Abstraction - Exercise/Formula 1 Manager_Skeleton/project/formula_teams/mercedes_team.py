from project.formula_teams.formula_team import FormulaTeam


class MercedesTeam(FormulaTeam):

    def __init__(self, budget: int):
        super().__init__(budget)

    def earned_money_from_sponsor(self, race_pos):
        sponsors_money = {
            1: 1_100_000,
            2: 600_000,
            3: 600_000,
            4: 100_000,
            5: 100_000,
            6: 50_000,
            7: 50_000,
        }
        earned_money = sponsors_money.get(race_pos, 0)
        expenses_per_race = 200_000
        result = earned_money - expenses_per_race

        return result
