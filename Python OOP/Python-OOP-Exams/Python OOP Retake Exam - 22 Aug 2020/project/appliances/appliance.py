class Appliance:
    DAY_FOR_MONTH = 30

    def __init__(self, cost: float):
        self.cost = cost

    def get_monthly_expense(self):
        return self.cost * self.DAY_FOR_MONTH
