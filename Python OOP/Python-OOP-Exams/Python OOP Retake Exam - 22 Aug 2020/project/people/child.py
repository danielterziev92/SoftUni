class Child:
    DAY_FOR_MONTH = 30

    def __init__(self, food_cost: int, *toys_cost):
        self.cost = food_cost + sum(toys_cost)

    def get_monthly_expense(self):
        return self.cost * self.DAY_FOR_MONTH
