class Room:
    appliances_types = ()
    room_cost = 0

    def __init__(self, name: str, budget: float, members_count: int):
        self.family_name = name
        self.budget = budget
        self.members_count = members_count
        self.children = list()
        self.expenses = 0
        self.appliances = self.generate_appliances(*self.appliances_types)

    def __repr__(self):
        self.budget -= self.total_expenses
        result = [
            f'{self.family_name} with {self.members_count} members. Budget: {self.budget:.2f}$, Expenses: {self.expenses:.2f}$',
            *self.get_children_result(),
            f'--- Appliances monthly cost: {self.get_appliance_result():.2f}$',
        ]
        return '\n'.join(result)

    @property
    def expenses(self):
        return self.__expenses

    @expenses.setter
    def expenses(self, value):
        self.__validate_expenses(value)
        self.__expenses = value

    @property
    def total_expenses(self):
        return self.expenses + self.room_cost

    def calculate_expenses(self, *args):
        result = 0
        for items in args:
            result += sum(x.get_monthly_expense() for x in items)

        self.expenses = result

    def generate_appliances(self, *appliances_types):
        appliances = list()
        for _ in range(self.members_count):
            for appliances_type in appliances_types:
                appliances.append(appliances_type())
        return appliances

    @staticmethod
    def __validate_expenses(value):
        if value < 0:
            raise ValueError('Expenses cannot be negative')

    def get_appliance_result(self):
        return sum(appliance.get_monthly_expense() for appliance in self.appliances)

    def get_children_result(self):
        result = [f'--- Child {i + 1} monthly cost: {child.get_monthly_expense():.2f}$'
                  for (i, child) in enumerate(self.children)
                  ]
        return result
